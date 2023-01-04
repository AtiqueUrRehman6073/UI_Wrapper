import { DockComponent } from './../Components/dock/dock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'homepage',  
    component: DashboardComponent  
  },
  {  
    path: 'docker',  
    component: DockComponent  
  },
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }