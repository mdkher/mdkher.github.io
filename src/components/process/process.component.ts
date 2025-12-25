import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  AfterViewInit,
  PLATFORM_ID,
  inject,
  OnDestroy,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-process",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./process.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svgPath") svgPath!: ElementRef<SVGPathElement>;
  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);

  steps = [
    {
      title: "Discovery",
      desc: "Decoding constraints & user needs.",
      icon: "01",
    },
    {
      title: "Architect",
      desc: "Wireframing low-fidelity schematics.",
      icon: "02",
    },
    {
      title: "Develop",
      desc: "High-fidelity UI & Interaction code.",
      icon: "03",
    },
    { title: "Deploy", desc: "Testing & launching to production.", icon: "04" },
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.svgPath) {
      const path = this.svgPath.nativeElement;
      const length = path.getTotalLength();

      // Reset
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              path.style.transition = "stroke-dashoffset 2.5s ease-in-out";
              path.style.strokeDashoffset = "0";
            }
          });
        },
        { threshold: 0.3 },
      );

      this.observer.observe(path.parentElement!); // Observe the SVG or container
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
