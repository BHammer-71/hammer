import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'hammer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'VP HOA' + VERSION.major;
  public title = 'Village Park HOA';
}
