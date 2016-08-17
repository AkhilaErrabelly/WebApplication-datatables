import { provideRouter, RouterConfig} from '@angular/router';

import {LoginComponent} from './auth/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Menu1Component} from './menu1/menu1.component';
import {AuthManager} from './authmanager';

export const appRoutes: RouterConfig = [
    {path: '', redirectTo: 'login'},
    {path: 'login', component:LoginComponent, canActivate: [AuthManager]},
    {path: 'dashboard', component:DashboardComponent, canActivate: [AuthManager]},
    {path: 'menu1', component:Menu1Component, canActivate: [AuthManager]}
];

export const AppRouterProvider = provideRouter(appRoutes);