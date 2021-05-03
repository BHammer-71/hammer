import { Component, Input } from '@angular/core';
import { Contact } from '@hammer/shared/data-access';

@Component({
  selector: 'hammer-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  @Input()
  contacts: Contact[] = [];
}
