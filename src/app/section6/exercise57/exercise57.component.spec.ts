import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise57Component } from './exercise57.component';

describe('Exercise57Component', () => {
  let component: Exercise57Component;
  let fixture: ComponentFixture<Exercise57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise57Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
