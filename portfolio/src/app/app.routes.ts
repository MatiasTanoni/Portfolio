import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects').then(m => m.Projects)
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience').then(m => m.Experience)
    },
    {
        path: 'education',
        loadComponent: () => import('./pages/education/education').then(m => m.Education)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'stats',
        loadComponent: () => import('./pages/stats/stats').then(m => m.Stats)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    }
];