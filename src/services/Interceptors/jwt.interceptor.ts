import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
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
      if (currentUser && currentUser.Token) { 
          debugger; 
          request = request.clone({  
              setHeaders: {  
                  Authorization: `Bearer ${currentUser.Token}`,  
                  Role: "admin",  
                  Host: "https://localhost://44370"  
              }  
          });  
      }  
      return next.handle(request);  
  }  
} 