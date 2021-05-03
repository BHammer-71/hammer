import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@hammer/shared/data-access';

@Component({
  selector: 'hammer-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() process = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.process.emit(authenticate);
  }

}
