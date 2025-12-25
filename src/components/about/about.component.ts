import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  HERO_DATA,
  EXPERIENCE_DATA,
  CLIENTS_DATA,
  EDUCATION_DATA,
  CERTIFICATION_DATA,
  AWARDS_DATA,
} from "../../data/portfolio-data";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  hero = HERO_DATA;
  experience = EXPERIENCE_DATA;
  clients = CLIENTS_DATA;
  education = EDUCATION_DATA;
  certs = CERTIFICATION_DATA;
  awards = AWARDS_DATA;
}
