import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const vphoaAuthRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
})
export class VphoaAuthModule {}
