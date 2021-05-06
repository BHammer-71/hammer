import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '@hammer/shared/data-access';
import { Observable } from 'rxjs';
import { UsersService } from './users.service'


@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  title = "Users";
  constructor(
    private titleService:Title,
    private usersService: UsersService,
     ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.users$= this.usersService.getUsers();
  }

}
