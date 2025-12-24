
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  private portfolioService = inject(PortfolioService);
  projects = this.portfolioService.projects;

  activeProject = signal<any>(null);

  setActive(project: any) {
    this.activeProject.set(project);
  }

  clearActive() {
    this.activeProject.set(null);
  }
}
