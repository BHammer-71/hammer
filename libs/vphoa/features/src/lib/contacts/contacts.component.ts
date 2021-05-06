import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  title = 'Contacts';
  constructor(private titleService:Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
