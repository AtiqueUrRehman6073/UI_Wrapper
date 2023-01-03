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
) {}  

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
    console.log("CanActivate method called from class AuthGuard..");  
      
    const currentUser = this.authenticationService.currentUserValue;  
    if (currentUser) {  

        this.router.navigate([''], { queryParams: { returnUrl: state.url }});  
        // authorised so return true  
        return true;  
    }  

    // not logged in so redirect to login page with the return url  
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});  
    return false;  
}  
} 