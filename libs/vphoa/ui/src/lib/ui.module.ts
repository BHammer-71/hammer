import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContactsListComponent
  ],
  exports: [
    ContactsListComponent
  ],
})
export class UiModule {}
