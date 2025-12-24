
import { Component, ChangeDetectionStrategy, inject, computed, AfterViewInit, OnDestroy, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';
import { ThemeService } from '../../services/theme.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';
import * as d3 from 'd3';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseStudyComponent implements AfterViewInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);
  private themeService = inject(ThemeService);

  // Chart Containers
  @ViewChild('researchChartContainer') researchChartContainer!: ElementRef;
  @ViewChild('impactChartContainer') impactChartContainer!: ElementRef;

  private projectId = toSignal(
    this.route.paramMap.pipe(map(params => params.get('id')))
  );

  project = computed(() => {
    const id = this.projectId();
    return id ? this.portfolioService.getProject(id) : null;
  });

  // TOC Config
  sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'research', label: 'Research' },
    { id: 'design', label: 'Design' },
    { id: 'outcomes', label: 'Outcomes' }
  ];

  activeSection = toSignal(
    fromEvent(window, 'scroll').pipe(
      map(() => this.detectActiveSection())
    ), { initialValue: 'overview' }
  );

  scrollProgress = 0;
  private scrollSub?: Subscription;

  constructor() {
    // Re-render charts when project changes OR theme changes
    effect(() => {
      const p = this.project();
      this.themeService.isDark(); // Dependency tracking
      if (p) {
        setTimeout(() => {
          this.renderResearchChart(p);
          this.renderImpactChart(p);
        }, 100);
      }
    });
  }

  ngAfterViewInit() {
    this.scrollSub = fromEvent(window, 'scroll').subscribe(() => {
      this.updateScrollProgress();
    });
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }

  updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / height) * 100;
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  detectActiveSection(): string {
    // We calculate "active" as the section that is currently "in view" towards the top of the screen.
    const offset = 300; // Pixel threshold from top of viewport
    let active = this.sections[0].id;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // rect.top is the distance from viewport top to element top.
        // If rect.top < offset, it means the element's start is higher up than our threshold
        // (i.e., we are "inside" or "below" the start of this section).
        if (rect.top < offset) {
          active = section.id;
        }
      }
    }
    return active;
  }

  // Helper to get chart color
  get chartColor() {
    return this.themeService.isDark() ? '#E2E2E2' : '#334155'; // Slate-700 for light mode
  }

  get chartBg() {
    return this.themeService.isDark() ? '#333' : '#e2e8f0';
  }

  renderResearchChart(project: Project) {
    if (!this.researchChartContainer || !project.researchGraph) return;

    const element = this.researchChartContainer.nativeElement;
    d3.select(element).selectAll('*').remove();

    const width = element.clientWidth;
    const height = element.clientHeight;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const x = d3.scaleBand()
      .domain(project.researchGraph.map(d => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    // Bars
    svg.append('g')
      .selectAll('rect')
      .data(project.researchGraph)
      .join('rect')
      .attr('x', (d: any) => x(d.label)!)
      .attr('y', (d: any) => y(d.value))
      .attr('height', (d: any) => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill', this.chartBg)
      .attr('rx', 6)
      .transition()
      .duration(1000)
      .attr('fill', this.chartColor);

    // X Axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .call((g: any) => g.select('.domain').remove())
      .selectAll('text')
      .attr('fill', this.themeService.isDark() ? '#888' : '#64748b')
      .style('font-family', 'monospace')
      .attr('dy', '15px');

    // Labels
    svg.selectAll('.label')
      .data(project.researchGraph)
      .enter()
      .append('text')
      .text((d: any) => d.value + '%')
      .attr('x', (d: any) => x(d.label)! + x.bandwidth() / 2)
      .attr('y', (d: any) => y(d.value) - 8)
      .attr('text-anchor', 'middle')
      .attr('fill', this.chartColor)
      .style('font-size', '12px')
      .style('font-weight', 'bold');
  }

  renderImpactChart(project: Project) {
    if (!this.impactChartContainer || !project.impactGraph) return;

    const element = this.impactChartContainer.nativeElement;
    d3.select(element).selectAll('*').remove();

    const width = element.clientWidth;
    const height = element.clientHeight;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const x = d3.scalePoint()
      .domain(project.impactGraph.map(d => d.label))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line<any>()
      .x(d => x(d.label)!)
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    const area = d3.area<any>()
      .x(d => x(d.label)!)
      .y0(height - margin.bottom)
      .y1(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Gradient
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'areaGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    // Light/Dark gradient stops
    const startColor = this.themeService.isDark() ? '#fff' : '#4f46e5';

    gradient.append('stop').attr('offset', '0%').attr('stop-color', startColor).attr('stop-opacity', 0.15);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', startColor).attr('stop-opacity', 0);

    // Area
    svg.append('path')
      .datum(project.impactGraph)
      .attr('fill', 'url(#areaGradient)')
      .attr('d', area);

    // Line
    const path = svg.append('path')
      .datum(project.impactGraph)
      .attr('fill', 'none')
      .attr('stroke', this.chartColor)
      .attr('stroke-width', 3)
      .attr('d', line);

    // Animate Line
    const length = (path.node() as SVGPathElement).getTotalLength();
    path.attr('stroke-dasharray', `${length} ${length}`)
      .attr('stroke-dashoffset', length)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // Dots
    svg.selectAll('.dot')
      .data(project.impactGraph)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => x(d.label)!)
      .attr('cy', (d: any) => y(d.value))
      .attr('r', 0)
      .attr('fill', this.themeService.isDark() ? '#000' : '#fff')
      .attr('stroke', this.chartColor)
      .attr('stroke-width', 2)
      .transition()
      .delay((d, i) => i * 100)
      .attr('r', 5);

    // X Axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .call((g: any) => g.select('.domain').attr('stroke', this.themeService.isDark() ? '#333' : '#e2e8f0'))
      .selectAll('text')
      .attr('fill', this.themeService.isDark() ? '#888' : '#64748b')
      .attr('dy', '1.5em')
      .style('font-family', 'monospace');
  }
}
