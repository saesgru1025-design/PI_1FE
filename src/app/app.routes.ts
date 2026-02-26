import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Activities } from './components/activities/activities';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'activities', component: Activities },
    { path: '**', redirectTo: 'dashboard' }
];
