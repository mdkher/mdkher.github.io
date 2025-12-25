import { Injectable, signal } from "@angular/core";
import {
  HeroData,
  Job,
  Project,
  Education,
  Certification,
  Award,
  Publication,
} from "../models/portfolio.models";
import {
  HERO_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  EDUCATION_DATA,
  CERTIFICATION_DATA,
  AWARDS_DATA,
  PUBLICATION_DATA,
} from "../data/portfolio-data";

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  // Signals exposing the static data
  heroData = signal<HeroData>(HERO_DATA);
  skills = signal<string[]>(SKILLS_DATA);
  jobs = signal<Job[]>(EXPERIENCE_DATA);
  projects = signal<Project[]>(PROJECTS_DATA);
  education = signal<Education[]>(EDUCATION_DATA);
  certifications = signal<Certification[]>(CERTIFICATION_DATA);
  awards = signal<Award[]>(AWARDS_DATA);
  publication = signal<Publication>(PUBLICATION_DATA);

  getProject(id: string) {
    return this.projects().find((p) => p.id === id);
  }
}
