import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** BEGIN components linked to this router */
import { vphoaAuthRoutes, VphoaAuthModule } from '@hammer/vphoa/auth'
/** END components linked to this router */

const routes: Routes = [
  /** STATIC PATHS FIRST */
  {
    path: 'auth',
    children: vphoaAuthRoutes
  },


  /** EMPTY PATH ROUTE */

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  /** WILDCARD ROUTES */

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    ),
    VphoaAuthModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
