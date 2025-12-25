import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  inject,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
} from "@angular/router";
import { GsapService } from "./services/gsap.service";
import { CursorService } from "./services/cursor.service";
import { CustomCursorComponent } from "./components/ui/custom-cursor/custom-cursor.component";
import { FooterComponent } from "./components/footer/footer.component";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import gsap from "gsap";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, CustomCursorComponent, FooterComponent],
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private gsapService = inject(GsapService); // Ensure GSAP is initialized

  @ViewChild("curtain") curtain!: ElementRef;
  private router = inject(Router);
  private cursorService = inject(CursorService); // Inject CursorService

  lenis!: Lenis; // Store reference

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.cursorService.clearPreview(); // Reset cursor state
        this.startTransition();
      } else if (event instanceof NavigationEnd) {
        this.endTransition();
        // Force scroll to top
        if (this.lenis) {
          this.lenis.scrollTo(0, { immediate: true });
        }
      }
    });
  }

  // ... (Transition methods remain same) -> restoring real code
  private startTransition() {
    if (!this.curtain) return;
    gsap.set(this.curtain.nativeElement, { y: "100%" });
    gsap.to(this.curtain.nativeElement, {
      y: "0%",
      duration: 0.6,
      ease: "power3.inOut",
    });
  }

  private endTransition() {
    if (!this.curtain) return;
    gsap.to(this.curtain.nativeElement, {
      y: "-100%",
      duration: 0.6,
      delay: 0.2,
      ease: "power3.inOut",
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initLenis();
    }
  }

  private initLenis() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      autoResize: true,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }
}
