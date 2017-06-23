import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviComponent } from './navi.component';
import { AlertService, AuthenticationService } from '../_services/index';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('NaviComponent', () => {
  let component: NaviComponent;
  let fixture: ComponentFixture<NaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviComponent ],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        AlertService,
        AuthenticationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
