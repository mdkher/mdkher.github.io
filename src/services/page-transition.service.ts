
import { Injectable, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class PageTransitionService {
  private router = inject(Router);
  private elements: any = {};
  private isAnimating = false;

  setElements(els: any) {
    this.elements = els;
    // Initial State
    if (this.elements.wipeLayer) {
       gsap.set(this.elements.wipeLayer.nativeElement, { y: '100%' });
    }
  }

  animateAndNavigate(path: any[]) {
    if (this.isAnimating || !this.elements.wipeLayer) {
        this.router.navigate(path);
        return;
    }

    this.isAnimating = true;

    const tl = gsap.timeline({
        onComplete: () => {
            this.router.navigate(path).then(() => {
                this.isAnimating = false;
            });
        }
    });

    // 1. Cover Screen (Snap Up)
    tl.to(this.elements.wipeLayer.nativeElement, {
        y: '0%',
        duration: 0.6,
        ease: 'expo.inOut' 
    })
    // 2. Show Minimal Loader
    .to(this.elements.loaderText.nativeElement, {
        opacity: 1,
        duration: 0.3
    }, "-=0.2")
    // Brief Pause
    .to({}, { duration: 0.2 });
  }

  // Called by AppComponent on NavigationEnd
  reveal() {
      if (!this.elements.wipeLayer) return;
      
      const tl = gsap.timeline({
          onComplete: () => {
             // Reset to bottom
             gsap.set(this.elements.wipeLayer.nativeElement, { y: '100%' });
          }
      });

      // 1. Hide Loader
      tl.to(this.elements.loaderText.nativeElement, {
          opacity: 0,
          duration: 0.2
      })
      // 2. Reveal Page (Slide Up to clear)
      .to(this.elements.wipeLayer.nativeElement, {
          y: '-100%',
          duration: 0.6,
          ease: 'power3.inOut' 
      });
  }
}
