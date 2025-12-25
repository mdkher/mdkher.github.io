import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
    providedIn: 'root'
})
export class GsapService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this.registerPlugins();
        }
    }

    registerPlugins() {
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP Plugins Registered');
    }

    // Core Animation: Clip Path Reveal
    reveal(element: HTMLElement, delay: number = 0) {
        gsap.fromTo(element,
            { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', autoAlpha: 0 },
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                autoAlpha: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: delay
            }
        );
    }

    // Core Animation: Stagger Text
    staggerText(elements: NodeListOf<Element> | Element[], delay: number = 0) {
        gsap.from(elements, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            delay: delay
        });
    }
}
