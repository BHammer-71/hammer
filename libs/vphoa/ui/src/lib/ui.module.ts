import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@hammer/shared/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddressFormComponent} from './address-form/address-form.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactsListComponent,
    AddressFormComponent,
    UsersListComponent,
  ],
  exports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    ContactsListComponent,
    AddressFormComponent,
    UsersListComponent,
  ],
})
export class UiModule {}
