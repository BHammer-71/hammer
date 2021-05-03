import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '@hammer/shared/data-access';
import { Contacts} from '@hammer/shared/data-access';

@Component({
  selector: 'hammer-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = Contacts;
  constructor() {
    // do nothing
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // do nothing
  }

}