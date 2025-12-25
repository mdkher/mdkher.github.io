import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  private portfolioService = inject(PortfolioService);
  private cursorService = inject(CursorService);

  projects = this.portfolioService.projects;

  getFormattedIndex(index: number): string {
    return `(0${index + 1})`;
  }

  onProjectHover(image: string) {
    this.cursorService.setPreview(image);
  }

  onProjectLeave() {
    this.cursorService.clearPreview();
  }
}
