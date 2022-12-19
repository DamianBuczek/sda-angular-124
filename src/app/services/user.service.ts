import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUser, ReqResponse, User } from '../models/app-models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<ReqResponse> {
    return this.httpClient.get<ReqResponse>(
      'https://reqres.in/api/users?delay=1'
    );
  }

  public addUser(user: AddUser): Observable<AddUser> {
    return this.httpClient.post<AddUser>(
      'https://reqres.in/api/users?delay=1',
      user
    );
  }

  public editUser(user: AddUser, userId: number): Observable<AddUser> {
    return this.httpClient.put<AddUser>(
      `https://reqres.in/api/users/${userId}?delay=1`,
      user
    );
  }
}
