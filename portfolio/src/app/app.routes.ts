import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
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
        path: '**',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    }
];