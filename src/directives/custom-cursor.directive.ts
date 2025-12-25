import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import gsap from "gsap";

@Directive({
  selector: "[appCustomCursor]",
  standalone: true,
})
export class CustomCursorDirective {
  private cursor!: HTMLElement;
  private follower!: HTMLElement;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initCursor();
    }
  }

  private initCursor(): void {
    // Create cursor elements dynamically
    this.cursor = document.createElement("div");
    this.cursor.classList.add(
      "fixed",
      "w-4",
      "h-4",
      "bg-electric-neon",
      "rounded-full",
      "pointer-events-none",
      "z-50",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "mix-blend-difference",
    );

    this.follower = document.createElement("div");
    this.follower.classList.add(
      "fixed",
      "w-10",
      "h-10",
      "border",
      "border-electric-neon",
      "rounded-full",
      "pointer-events-none",
      "z-40",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "transition-transform",
      "duration-100",
    );

    document.body.appendChild(this.cursor);
    document.body.appendChild(this.follower);

    // Hide default cursor
    document.body.style.cursor = "none";
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;

    // Elastic delay with GSAP
    gsap.to(this.cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power2.out",
    });

    gsap.to(this.follower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  }
}
