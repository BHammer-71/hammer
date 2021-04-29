import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@hammer/api-interfaces';


@Component({
  selector: 'hammer-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
