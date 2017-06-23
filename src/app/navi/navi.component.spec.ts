import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviComponent } from './navi.component';

describe('NaviComponent', () => {
  let component: NaviComponent;
  let fixture: ComponentFixture<NaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviComponent ]
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
