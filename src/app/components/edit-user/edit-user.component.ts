import { Component } from '@angular/core';
import { AddUser } from 'src/app/models/app-models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  public editUser: AddUser = {
    name: "Jan",
    job: "Maszynista"
  };
  public addStatus: string = '';

  constructor(private userService: UserService) {}

  public onEditUser(addUser: AddUser): void {
    this.userService.editUser(addUser, 2).subscribe((res) => {
      this.addStatus = 'Użytkownika edytowany!';
    });
  }
}
