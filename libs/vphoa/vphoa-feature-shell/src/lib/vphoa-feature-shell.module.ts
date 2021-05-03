import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';


const vphoaFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () => import('@hammer/vphoa/features').then((esModule) => esModule.FeatureContactsModule),
      }
      // all other routes in this module go here
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(vphoaFeatureShellRoutes),
  ],
  declarations: [
    ShellComponent
  ],
  exports: [RouterModule]
})
export class VphoaFeatureShellModule {}
