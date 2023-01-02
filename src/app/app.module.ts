// import { PrimeModule } from './../shared/prime/prime.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { DataTableComponent } from './Components/data-table/data-table.component';
import { PrimeModule } from 'src/shared/prime/prime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//registerAllModules();

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HotTableModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
