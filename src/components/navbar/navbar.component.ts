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
import { RouterLink, RouterLinkActive } from "@angular/router";
import gsap from "gsap";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./navbar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
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
