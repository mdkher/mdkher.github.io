import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  inject,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
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
import { PageTransitionService } from "./services/page-transition.service";
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

  // Header Elements
  // Header Elements
  @ViewChild('wipeLayer') wipeLayer!: ElementRef;
  @ViewChild('loaderText') loaderText!: ElementRef;
  
  private router = inject(Router);
  private cursorService = inject(CursorService);
  private transitionService = inject(PageTransitionService); // Inject new service

  lenis!: Lenis; 

  constructor() {
    this.router.events.subscribe((event) => {
      // NOTE: NavigationStart is now handled by the Directive + Service (Curtain Up)
      
      if (event instanceof NavigationEnd) {
        this.cursorService.clearPreview();
        // Reveal (Curtain Down)
        this.transitionService.reveal();
        
        // Force scroll to top
        if (this.lenis) {
          this.lenis.scrollTo(0, { immediate: true });
        }
      }
    });
  }

  ngAfterViewInit(): void {
    // Register elements with the service
    if(this.wipeLayer) {
        this.transitionService.setElements({
            wipeLayer: this.wipeLayer,
            loaderText: this.loaderText
        });
    }

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
