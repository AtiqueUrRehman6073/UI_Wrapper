import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/services/userAuth/user-auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent {
  showPass: boolean = false;
  registerFormGroup: FormGroup;
  registerData = { Name: '', Password: '', Email: '' };
  constructor(private router: Router, private _authservice: UserAuthService, private messageService: MessageService) {
    if (this._authservice.currentUserValue) {
      this.router.navigate(['/login']);
    }
    this.registerFormGroup = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    });
  }
  ngOnInit() {

  }
  toggleShowPass() {
    this.showPass = !this.showPass;
  }
  get f() {
    return this.registerFormGroup.controls;
  }

  register() {
    console.log('login called from login Component');
    this.registerData.Name = this.registerFormGroup.controls['Name'].value;
    this.registerData.Email = this.registerFormGroup.controls['Email'].value;
    this.registerData.Password = this.registerFormGroup.controls['Password'].value;
    this._authservice.registerUser(this.registerData).subscribe(
      (data: any) => {
        console.log("loggedin : ", data);   ///// received the jwt token
        debugger;
        if (data != null && data != undefined) {
          if (data.Name == this.registerData.Name)
            this.router.navigate(['/login']);
        }
      },
      (error: any) => {
        if (error.status == 401) {
          this.messageService.add({ severity: 'error', summary: 'Un-Authorized User', detail: 'Account Not Found !! \n\n Api Response Status : ' + error.status, })
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Something went wrong !', detail: 'Error Details : ' + error.message + ' \n\n Api Response Status : ' + error.status, })
        }
        console.log("erorr: ", error);
      }
    );
  }
}