import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RegisterComponent } from './register/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { NaviComponent } from './navi/index';

@NgModule({
  declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NaviComponent
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
