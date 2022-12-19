import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddUser } from 'src/app/models/app-models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Input() public addUser: AddUser = {
    name: '',
    job: '',
  };
  @Output() onUserFormSubmit: EventEmitter<AddUser> = new EventEmitter();

  public onClick(): void{
    this.onUserFormSubmit.emit(this.addUser);
    this.addUser = {
      name: '',
      job: '',
    };
  }
}
