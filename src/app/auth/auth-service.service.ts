import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

const BASE_URL = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationStatus = false;
  private token: string;
  private tokenTimer: any;
  private authStatusObs = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getAuthStatusObservable() {
    return this.authStatusObs.asObservable();
  }

  getAuthenticationStatus() {
    return this.authenticationStatus;
  }

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
    this.http.post<{token: string, expiresIn: number}>(BASE_URL + '/login', authData)
    .subscribe(response => {
      this.token = response.token;
      if (this.token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.authenticationStatus = true;
        this.authStatusObs.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveLocalAuthData(this.token, expirationDate);
        this.router.navigate(['/']);
      }
    });
  }

  logoutUser() {
    this.token = null;
    this.authenticationStatus = false;
    this.authStatusObs.next(false);
    this.router.navigate(['/']);
    this.clearLocalAuthData();
    clearTimeout(this.tokenTimer);
  }

  autoAuthUser() {
    const localUserInformation = this.getLocalAuthData();

    if (!localUserInformation) {
      return;
    }

    const now = new Date();
    const expiresIn = localUserInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = localUserInformation.token;
      this.authenticationStatus = true;
      this.authStatusObs.next(true);
      this.setAuthTimer(expiresIn / 1000);
    }
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logoutUser();
    }, duration * 1000);
  }

  private saveLocalAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  private clearLocalAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationData');
  }

  private getLocalAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');

    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate)
    };
  }
}
