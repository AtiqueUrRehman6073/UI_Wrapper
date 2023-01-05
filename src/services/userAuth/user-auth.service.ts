import { urls } from './../../environments/Urls';
import { userModel } from './../../app/Models/UserModel';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private baseUrl: string = urls.BaseUrl;
  private loginUrl: string = urls.UserAuth;
  private singupUrl: string = urls.UserSignup;
  private currentUserSubject: BehaviorSubject<userModel>;
  public currentUser: Observable<userModel>;
  private _loginUrl = urls.UserAuth;
  private _registerUrl = urls.UserSignup;
  constructor(private http: HttpClient) {
    let x = sessionStorage.getItem('currentUser');
    console.log('Sesstion Storage Item : ', sessionStorage.getItem('currentUser'));
    this.currentUserSubject = new BehaviorSubject<any>(x == null || x == undefined ? { Name: '', Email: '', Password: '', Token: null } : x);
    console.log('This is current User Subject : ', this.currentUserSubject);
    this.currentUser = this.currentUserSubject.asObservable();
    console.log('Current User Value Is :::::===>  ', this.currentUser);
  }

  get currentUserValue() {
    let r = sessionStorage.getItem('currentUser');
    var x;
    if (typeof r == 'string')
      x = JSON.parse(r == null ? "" : r);
    else
      x = r;
    return x;
  }

  getAuthToken() {
    return "TOKEN-001001010100111";
  }
  registerUser(user: userModel) {
    return this.http.post<any>(this.baseUrl + this._registerUrl, user, { responseType: 'json' });
  }
  login(user: userModel) {
    console.log('Login Called from Auth service ...', user);
    return this.http.post<any>(this.baseUrl + this._loginUrl, user);
  }

  authenticate(loginData: userModel) {
    console.log('Authenticate Called from Auth service ...');
    return this.http.post(this.baseUrl + this.loginUrl, loginData)
      .pipe(map((user: any) => {
        // login successful if there's a jwt token in the response  
        if (user && user.token.length > 0) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes  
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          //this.currentUserSubject.next(user);  
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out  
    sessionStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);  
  }
} 