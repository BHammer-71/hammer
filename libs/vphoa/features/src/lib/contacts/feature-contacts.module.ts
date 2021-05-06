import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@hammer/vphoa/ui';
import { ContactsComponent } from './contacts.component';

const routes: Routes=[
  {
    path: '',
    pathMatch: 'full',
    component: ContactsComponent
  }
]

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
  ],
  exports: [ContactsComponent, UiModule],
})
export class FeatureContactsModule { }
