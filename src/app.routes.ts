import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'case-study/:id',
    loadComponent: () => import('./components/case-study/case-study.component').then(m => m.CaseStudyComponent)
  },
  { path: '**', redirectTo: '' }
];
