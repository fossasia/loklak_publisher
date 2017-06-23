import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        BaseRequestOptions,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
