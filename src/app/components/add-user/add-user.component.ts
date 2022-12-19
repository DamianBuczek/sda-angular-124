import { Component } from '@angular/core';
import { AddUser } from 'src/app/models/app-models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  public addStatus: string = '';

  constructor(private userService: UserService) {}

  public onAddUser(addUser: AddUser): void {
    this.userService.addUser(addUser).subscribe((res) => {
      this.addStatus = 'Użytkownika dodany!';
    });
  }
}
