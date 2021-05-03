import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { UiModule } from '@hammer/vphoa/ui'


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
  exports: [ContactsComponent],
})
export class FeatureContactsModule { }
