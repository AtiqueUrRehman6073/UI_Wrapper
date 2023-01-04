import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserAuthService } from 'src/services/userAuth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  loginData = { Name: '', Password: '',Email:''};  
  constructor(private router: Router, private _authservice: UserAuthService, private messageService:MessageService) {
    // redirect to paidEvents if already logged in  
    if (this._authservice.currentUserValue) {
      this.router.navigate(['/dashboard/homepage']);
    }
    this.loginFormGroup = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    });
  }
  ngOnInit() {

  }
  get f() {
    return this.loginFormGroup.controls;
  }

  login() {  
    console.log('login called from login Component');  
    this._authservice.login(this.loginData).subscribe(  
      (data:any) => {  
        console.log("loggedin : ", data );
        this.router.navigate(['/dashboard/homepage'], { queryParams: { }});  
      },  
      (error:any) => { 
        if(error.status == 401){
          this.messageService.add({severity:'error',summary:'Un-Authorized User',detail:'Account Not Found !! \n\n Api Response Status : '+error.status,})
        }
        else{
          this.messageService.add({severity:'error',summary:'Something went wrong !',detail:'Error Details : '+error.message+' \n\n Api Response Status : '+error.status,})
        }
        console.log("erorr: ", error);  
      }  
    );
  }
}