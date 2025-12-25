
import { Directive, HostListener, Input, inject } from '@angular/core';
import { PageTransitionService } from '../services/page-transition.service';

@Directive({
  selector: '[appLink]',
  standalone: true
})
export class PageTransitionDirective {
  @Input() appLink!: any[] | string; // Renamed from routerLink
  private transitionService = inject(PageTransitionService);

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const path = Array.isArray(this.appLink) ? this.appLink : [this.appLink];
    this.transitionService.animateAndNavigate(path);
  }
}
