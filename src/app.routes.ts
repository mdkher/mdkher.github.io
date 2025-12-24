import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'case-study/:id', component: CaseStudyComponent },
  { path: '**', redirectTo: '' }
];
