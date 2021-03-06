import { LoginComponent } from './components/secutiry/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './components/secutiry/auth.guard';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent },
    {path: 'user-new', component: UserNewComponent, canActivate: [AuthGuard] },
    {path: 'user-new/:id', component: UserNewComponent, canActivate: [AuthGuard] },
    {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
