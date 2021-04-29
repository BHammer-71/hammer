import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** BEGIN components linked to this router */
import { vphoaAuthRoutes, VphoaAuthModule } from '@hammer/vphoa/auth'
// import { FeaturesModule } from '@hammer/vphoa/features';
/** END components linked to this router */

const routes: Routes = [
  /** STATIC PATHS FIRST */
  {
    path: 'auth',
    children: vphoaAuthRoutes
  },
  /** EMPTY PATH ROUTE */
  /*
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@hammer/vphoa/home-page').then(
        (module) => module.VphoaHomePageModule
      ),
  },
  */
  /** WILDCARD ROUTES */

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { initialNavigation: 'enabledBlocking' }
    ),
    VphoaAuthModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
