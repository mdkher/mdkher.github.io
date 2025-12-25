import { Component, ChangeDetectionStrategy, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PortfolioService } from "../../services/portfolio.service";
import { CursorService } from "../../services/cursor.service";
import { PageTransitionDirective } from '../../directives/page-transition.directive';

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [CommonModule, PageTransitionDirective],
  templateUrl: "./portfolio.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
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
