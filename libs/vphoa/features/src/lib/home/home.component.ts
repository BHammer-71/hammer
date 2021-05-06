import { Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

// import { HttpClient } from '@angular/common/http';
// import { Message } from '@hammer/api-interfaces';



@Component({
  selector: 'hammer-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public name = 'VP HOA' + VERSION.major;
    public title = 'Village Park HOA';
  // hello$ = this.http.get<Message>('/api/hello');
  constructor(private titleService:Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
