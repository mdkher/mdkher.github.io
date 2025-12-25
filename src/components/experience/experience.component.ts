import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  PLATFORM_ID,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { PortfolioService } from "../../services/portfolio.service";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements AfterViewInit {
  private portfolioService = inject(PortfolioService);
  private platformId = inject(PLATFORM_ID);

  jobs = this.portfolioService.jobs;

  @ViewChildren("timelineDot") timelineDots!: QueryList<ElementRef>;
  @ViewChildren("jobItem") jobItems!: QueryList<ElementRef>;
  @ViewChild("svgPath") svgPath!: ElementRef<SVGPathElement>;
  @ViewChild("container") container!: ElementRef<HTMLElement>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initTimeline(), 200);
      window.addEventListener("resize", () => this.initTimeline());
    }
  }

  private initTimeline() {
    if (!this.timelineDots || this.timelineDots.length === 0) return;

    const dots = this.timelineDots.toArray();
    const containerRect = this.container.nativeElement.getBoundingClientRect();
    const path = this.svgPath.nativeElement;

    let d = "";

    dots.forEach((dot, i) => {
      const rect = dot.nativeElement.getBoundingClientRect();

      // Calculate exact center relative to the container
      const cx = rect.left + rect.width / 2 - containerRect.left;
      const cy = rect.top + rect.height / 2 - containerRect.top;

      if (i === 0) {
        d += `M ${cx} ${cy}`;
      } else {
        d += ` L ${cx} ${cy}`;
      }
    });

    // Extend line to bottom
    const lastDot = dots[dots.length - 1];
    if (lastDot) {
      const rect = lastDot.nativeElement.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 - containerRect.left;
      const cy = rect.bottom - containerRect.top + 50; // Extend 50px below last dot
      d += ` L ${cx} ${cy}`;
    }

    path.setAttribute("d", d);

    // Animate the Path
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: this.container.nativeElement,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    // Animate Items
    const items = this.jobItems.toArray();
    items.forEach((item, i) => {
      gsap.fromTo(
        item.nativeElement,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item.nativeElement,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }
}
