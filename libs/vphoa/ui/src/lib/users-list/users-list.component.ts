import { Component, Input } from '@angular/core';
import { User } from '@hammer/shared/data-access';
// import { Observable } from 'rxjs';


@Component({
  selector: 'hammer-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input()
  users$?: User[];
}
