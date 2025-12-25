import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  ElementRef,
  ViewChild,
  effect,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import gsap from "gsap";
import { ThemeService } from '../../services/theme.service';
import { PageTransitionDirective } from '../../directives/page-transition.directive';

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, PageTransitionDirective],
  templateUrl: "./navbar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  router = inject(Router);
  isOpen = signal(false);

  @ViewChild("menuContainer") menuContainer!: ElementRef;
  @ViewChild("navLinks") navLinks!: ElementRef;

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.animateOpen();
      } else {
        this.animateClose();
      }
    });
  }

  toggle() {
    this.isOpen.update((v) => !v);
  }

  private animateOpen() {
    gsap.to(this.menuContainer.nativeElement, {
      width: "300px",
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(this.navLinks.nativeElement, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      delay: 0.2,
      display: "flex",
    });
  }

  private animateClose() {
    gsap.to(this.menuContainer.nativeElement, {
      width: "60px",
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(this.navLinks.nativeElement, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      display: "none",
    });
  }
}
