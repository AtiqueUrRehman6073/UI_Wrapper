import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../userAuth/user-auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: UserAuthService) { }  
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
      console.log("Intercept method called from JWTInterceptor..");  
      // add authorization header with jwt token if available  
      let currentUser = this.authenticationService.currentUserValue;  
      console.log('This is JWT Current User : ',currentUser);
      var headers;
      if (currentUser && currentUser.Token) { 
          //debugger;
          headers = new HttpHeaders({
            'Authorization': `Bearer ${currentUser.Token}`,
            'Access-Control-Allow-Origin': '*'
          }); 
          request = request.clone({headers});//.headers.append('Authorization',`Bearer ${currentUser.Token}`);  
          //request.headers.set('Authorization', `Bearer ${currentUser.Token}`);
      }  
      return next.handle(request);  
  }  
} 