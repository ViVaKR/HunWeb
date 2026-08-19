import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'HunWeb | Home' },
  { path: '**', redirectTo: '' }
];
