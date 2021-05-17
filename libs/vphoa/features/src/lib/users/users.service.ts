import { Injectable } from '@angular/core';
import { User } from '@hammer/shared/data-access'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class UsersService {
  // apiUrl: './../../../../../../apps/vphoa/src/assets/users-temp.json';
  // private user = from(Users);
  constructor( private httpClient: HttpClient) { }
  private api = "api/users"  // url to backend
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** GET all users from server */
  getUsers(): Observable<User[]>{
    const ret = this.httpClient.get<User[]>(this.api)
      .pipe(
        tap(()=> console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
    console.log("users.service.getUsers() returns ", ret);
    return ret;
  }
  login(authenticate: User): Observable<unknown> {
    return this.httpClient.post('http://localhost:3000/login', authenticate);
  }

  /** POST: add a new User to the server */
  addUser(user: User): Observable<User> {
    return this.httpClient.post(this.api, user,
      this.httpOptions)
      .pipe(
        tap((newUser: User)=>console.log(`Added new user with ID: ${newUser.id}`))
      );
  }

  /** DELETE: delete the User from the server */
  deleteUser(id: string): Observable<User> {
    const url = `${this.api}/${id}`;

    return this.httpClient.delete<User>(url, this.httpOptions).pipe(
      tap(() => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<never>('deleteUser'))
    );
  }

  /** PUT: update the User on the server */
  updateHero(user: User): Observable<User> {
    return this.httpClient.put(this.api, user, this.httpOptions).pipe(
      tap(() => console.log(`updated User id=${user.id}`)),
      catchError(this.handleError<never>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
