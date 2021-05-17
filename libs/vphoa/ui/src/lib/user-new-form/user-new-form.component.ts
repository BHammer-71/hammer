import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder} from '@angular/forms';
// import {FormGroup,  FormControl,} from '@angular/forms';
import { User } from '@hammer/shared/data-access'

@Component({
  selector: 'hammer-user-new-form',
  templateUrl: './user-new-form.component.html',
  styleUrls: ['./user-new-form.component.css']
})
export class UserNewFormComponent {
  userForm = this.fb.group({
    username: [null, ],
    password: [null, ],
  });
  @Output() formSubmit = new EventEmitter<User>();


  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    this.formSubmit.emit(this.userForm.value);
    alert('Form Submitted!');
  }

}
