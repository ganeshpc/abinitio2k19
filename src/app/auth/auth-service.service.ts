import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(authData: AuthData) {
    this.http.post(BASE_URL + '/signup', authData)
    .subscribe(response => {
      console.log(response);
    });
  }

  loginUser(email: string, password: string) {
    const authData = {
      email,
      password
    };
    this.http.post(BASE_URL + '/login', authData)
    .subscribe(response => {
      console.log(response);
    });
  }
}
