import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioService } from "../../services/portfolio.service";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  portfolioService = inject(PortfolioService);
  skills = this.portfolioService.skills;
}
