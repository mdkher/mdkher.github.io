import { Component, ChangeDetectionStrategy, inject, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, effect } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CursorService } from '../../../services/cursor.service';
import gsap from 'gsap';

@Component({
    selector: 'app-custom-cursor',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div #cursor class="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-exclusion transition-transform duration-100 ease-out will-change-transform"></div>
    
    <div #preview class="fixed top-0 left-0 w-64 h-40 bg-gray-900 pointer-events-none z-[90] overflow-hidden opacity-0 scale-50 rounded-lg origin-center will-change-transform">
        <img *ngIf="cursorService.previewImage() as src" [src]="src" class="w-full h-full object-cover">
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCursorComponent implements AfterViewInit {
    cursorService = inject(CursorService);
    platformId = inject(PLATFORM_ID);

    @ViewChild('cursor') cursor!: ElementRef;
    @ViewChild('preview') preview!: ElementRef;

    constructor() {
        effect(() => {
            const isHovering = this.cursorService.isHovering();

            if (isPlatformBrowser(this.platformId) && this.cursor && this.preview) {
                if (isHovering) {
                    gsap.to(this.cursor.nativeElement, { scale: 0.5, duration: 0.3 });
                    gsap.to(this.preview.nativeElement, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
                } else {
                    gsap.to(this.cursor.nativeElement, { scale: 1, duration: 0.3 });
                    gsap.to(this.preview.nativeElement, { opacity: 0, scale: 0.5, duration: 0.3 });
                }
            }
        });
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initFollower();
        }
    }

    private initFollower() {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;

            // Cursor follows exactly (or with slight lag handled by CSS or GSAP)
            gsap.to(this.cursor.nativeElement, {
                x: clientX - 6, // center offset (w-3 = 12px / 2 = 6)
                y: clientY - 6,
                duration: 0.1
            });

            // Preview follows with more lag
            gsap.to(this.preview.nativeElement, {
                x: clientX + 20,
                y: clientY + 20,
                duration: 0.5,
                ease: 'power3.out'
            });
        });
    }
}
