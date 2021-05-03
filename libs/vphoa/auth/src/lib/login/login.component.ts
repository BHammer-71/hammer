import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hammer-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  login(authenticate:unknown) {
    console.log(authenticate);
  }

}
