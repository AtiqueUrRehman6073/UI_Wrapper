import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: '',  
    component: LoginComponent  
  },
  {  
    path: 'login',  
    component: LoginComponent  
  },
  {  
    path: 'register',  
    component: RegisterComponent  
  },
  {
    path:'dashboard',
    loadChildren: () => import('./Modules/dashboard.module').then(m => m.DashboardModule)
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
