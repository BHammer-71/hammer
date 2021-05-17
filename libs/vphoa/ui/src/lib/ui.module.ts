import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@hammer/shared/material';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddressFormComponent} from './address-form/address-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserNewFormComponent } from './user-new-form/user-new-form.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContactsListComponent,
    AddressFormComponent,
    UsersListComponent,
    UserNewFormComponent,
  ],
  exports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MaterialModule,
    ContactsListComponent,
    AddressFormComponent,
    UsersListComponent,
    UserNewFormComponent,
  ],
})
export class UiModule {}
