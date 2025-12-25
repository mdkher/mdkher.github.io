import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ViewChildren, ElementRef, QueryList, PLATFORM_ID, Signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { GsapService } from '../../services/gsap.service';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements AfterViewInit {
  private portfolioService = inject(PortfolioService);
  private gsapService = inject(GsapService);
  private platformId = inject(PLATFORM_ID);

  heroData = this.portfolioService.heroData;

  @ViewChildren('magnetic') magneticElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initMagneticEffect();
      this.initEntrance();
    }
  }

  private initEntrance() {
    // Simple stagger entrance
    gsap.from(this.magneticElements.map(el => el.nativeElement), {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out'
    });
  }

  private initMagneticEffect() {
    this.magneticElements.forEach((el) => {
      const element = el.nativeElement;

      element.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        // Calculate distance from center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Magnetic pull strength
        gsap.to(element, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: 'power3.out'
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }
}
