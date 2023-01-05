import { userModel } from './../../app/Models/UserModel';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../userAuth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserAuthService
  ) { }

  currentUser: userModel = {
    Name: '',
    Email: '',
    Password: ''
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.currentUser = this.authenticationService.currentUserValue;
    //this.currentUser = JSON.parse(this.currentUser);
    if (this.currentUser != null && this.currentUser != undefined && this.currentUser.Token != null) {
      return true;
    }
    // not logged in so redirect to login page with the return url  
    this.router.navigate(['/login']);
    return false;
  }
} 