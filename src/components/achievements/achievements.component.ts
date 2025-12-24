
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementsComponent {
  portfolioService = inject(PortfolioService);
  awards = this.portfolioService.awards;
  publication = this.portfolioService.publication;
}
