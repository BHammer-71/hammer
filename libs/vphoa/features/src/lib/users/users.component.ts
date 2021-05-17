import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '@hammer/shared/data-access';
import { UsersService } from './users.service';
// import { Observable } from 'rxjs';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UsersComponent implements OnInit {
  users$: User[];
  title = "Users";
  constructor(
    private titleService:Title,
    private usersService: UsersService,
     ) {}

  ngOnInit(): void {
    this.getUsers();
    this.titleService.setTitle(this.title);
  }
  getUsers(): void {
    this.usersService.getUsers()
     .subscribe(users => {
       this.users$=users;
       console.log("users.component.getUsers() returns: ",this.users$);
     });

  }
  addUser(user: User){
    this.usersService.addUser(user).subscribe();
  }

}
