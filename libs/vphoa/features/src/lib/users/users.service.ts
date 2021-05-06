import { Injectable } from '@angular/core';
// import {FeatureUsersModule} from './feature-users.module';
import { User } from '@hammer/shared/data-access'
// import {Users} from '@hammer/shared/data-access';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { from } from 'rxjs';

@Injectable()
export class UsersService {
  apiUrl: './../../../../../../apps/vphoa/src/assets/users-temp.json';
  // private user = from(Users);
  constructor( private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    const ret = this.httpClient.get<User[]>(this.apiUrl);
    console.log("apiUrl returns ", ret);
    return ret;
  }
}
