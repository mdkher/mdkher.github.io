
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  jobs = this.portfolioService.jobs;

  // Using a signal to track the currently expanded job ID.
  expandedJobId = signal<string | null>(null);

  constructor() {
    // Optionally auto-expand the first job
    if (this.jobs().length > 0) {
      this.expandedJobId.set(this.jobs()[0].id);
    }
  }

  toggle(id: string) {
    this.expandedJobId.update(current => current === id ? null : id);
  }

  isExpanded(id: string) {
    return this.expandedJobId() === id;
  }
}
