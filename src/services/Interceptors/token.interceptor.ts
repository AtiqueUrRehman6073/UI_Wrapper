import { userModel } from './../../app/Models/UserModel';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/dist/types/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  crrntUser: userModel = {
    Name: '',
    Email: '',
    Password: '',
  };
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map(event => {
      console.log('Message From Interceptor : ', event);
      if (event instanceof HttpResponse) {
        //// do code here for response ////
        this.crrntUser = event.body;
        console.log('This is the response inteception : ', this.crrntUser);
        if (this.crrntUser.Token != null && this.crrntUser.Token != undefined && this.crrntUser.Token.length > 0)
          sessionStorage.setItem('currentUser', JSON.stringify(event.body));
        //this.messageService.add({severity:'warning',summary:'Api Response : ',detail:event.body})
      }
      return event;
    }));
  }
}
