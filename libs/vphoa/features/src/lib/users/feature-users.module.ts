import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@hammer/vphoa/ui';
import { UsersComponent } from './users.component';''
import { UsersService } from './users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes: Routes=[
  {
    path: '',
    pathMatch: 'full',
    component: UsersComponent,
  }
]

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    UsersComponent
  ],
  providers: [UsersService]
})
export class FeatureUsersModule { }
