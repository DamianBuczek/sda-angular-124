import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqResponse } from '../models/app-models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<ReqResponse> {
    return this.httpClient.get<ReqResponse>(
      'https://reqres.in/api/users?page=2'
    );
  }
}
