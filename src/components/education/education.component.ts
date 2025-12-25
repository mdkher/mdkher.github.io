import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioService } from "../../services/portfolio.service";

@Component({
  selector: "app-education",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./education.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  portfolioService = inject(PortfolioService);
  education = this.portfolioService.education;
  certifications = this.portfolioService.certifications;
}
