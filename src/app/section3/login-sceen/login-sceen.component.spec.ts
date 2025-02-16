import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSceenComponent } from './login-sceen.component';

describe('LoginSceenComponent', () => {
  let component: LoginSceenComponent;
  let fixture: ComponentFixture<LoginSceenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSceenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSceenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
