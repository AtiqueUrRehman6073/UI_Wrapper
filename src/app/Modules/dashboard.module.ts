import { DockComponent } from './../Components/dock/dock.component';
import { ToastModule } from 'primeng/toast';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HotTableModule } from '@handsontable/angular';
import { PrimeModule } from 'src/shared/prime/prime.module';
import { LoaderComponent } from '../Components/loader/loader.component';
import { DataTableComponent } from '../Components/data-table/data-table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoaderComponent,
    DataTableComponent,
    DockComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    HttpClientModule,
    HotTableModule,
    PrimeModule,
    ToastModule
  ]
})
export class DashboardModule { }
