import { Component } from '@angular/core';
import { User } from 'src/app/models/app-models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  public users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((res) => {
      this.users = res.data;
    });
  }
}
