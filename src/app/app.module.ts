import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { PrimeModule } from 'src/shared/prime/prime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardModule } from './Modules/dashboard.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from 'src/services/Interceptors/jwt.interceptor';
import { TokenInterceptor } from 'src/services/Interceptors/token.interceptor';
import { PasswordStrengthBarComponent } from './Components/password-strength-bar/password-strength-bar.component';
import { LoaderComponent } from './Components/loader/loader.component';

//registerAllModules();

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent, PasswordStrengthBarComponent, LoaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HotTableModule,
    PrimeModule,
    DashboardModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
