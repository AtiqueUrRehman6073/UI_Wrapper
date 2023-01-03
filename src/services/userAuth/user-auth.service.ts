import { userModel } from './../../app/Models/UserModel';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private currentUserSubject: BehaviorSubject<userModel>;  
  public currentUser: Observable<userModel>;  
  private _loginUrl = "api/login";  
  private _registerUrl = "api/register";  
  constructor(private http: HttpClient) {  
    let x = sessionStorage.getItem('currentuser');
    this.currentUserSubject = new BehaviorSubject<userModel>(JSON.parse(sessionStorage.getItem('currentUser')==null?"":x == null?"":x));  
    this.currentUser = this.currentUserSubject.asObservable();  
}  
  
  get currentUserValue() {  
    return this.currentUserSubject.value;  
  }  
  
  getAuthToken(){  
    return "TOKEN-001001010100111";  
  }  
  registerUser(user:userModel) {  
    return this.http.post<any>(this._registerUrl, user);  
  }  
  login(user:userModel) {  
    return this.http.post<any>(this._loginUrl, user);  
  }  
  
  authenticate(loginData:any) {  
    return this.http.post<any>("http://localhost:4200/api/login", loginData)  
        .pipe().map((user:userModel) => {  
            // login successful if there's a jwt token in the response  
            if (user && user.token) {  
                // store user details and jwt token in local storage to keep user logged in between page refreshes  
                sessionStorage.setItem('currentUser', JSON.stringify(user));  
                this.currentUserSubject.next(user);  
            }  
  
            return user;  
        });  
      }  
        
      logout() {  
        // remove user from local storage to log user out  
        sessionStorage.removeItem('currentUser');  
        this.currentUserSubject.next(null);  
    }  
} 