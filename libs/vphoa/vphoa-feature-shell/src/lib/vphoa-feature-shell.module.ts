import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { vphoaAuthRoutes, VphoaAuthModule } from '@hammer/vphoa/auth'



const vphoaFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'auth',
        children: vphoaAuthRoutes
      },
      {
        path: 'contacts',
        loadChildren: () => import('@hammer/vphoa/features').then((esModule) => esModule.FeatureContactsModule),
      },

      {
        path: 'users',
        loadChildren: () => import('@hammer/vphoa/features').then(mod=> mod.FeatureUsersModule),
      },

      {
        path: '',
        pathMatch:"full",
        loadChildren: () => import('@hammer/vphoa/features').then ((module) => module.FeatureHomeModule),
      }
      // all other routes in this module go here
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(vphoaFeatureShellRoutes,{ initialNavigation: 'enabled'}),
    VphoaAuthModule,
  ],
  declarations: [
    ShellComponent
  ],
  exports: [RouterModule]
})
export class VphoaFeatureShellModule {}
