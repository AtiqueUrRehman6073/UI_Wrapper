import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginFormGroup:FormGroup;

  constructor(private router:Router){
    this.loginFormGroup = new FormGroup({
      Name : new FormControl('',Validators.required),
      Email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    });
  }

  ngOnInit(){

  }
  get f(){
    return this.loginFormGroup.controls;
  }
  
  login(){
    this.router.navigateByUrl('/dashboard/homepage');
  }
}
