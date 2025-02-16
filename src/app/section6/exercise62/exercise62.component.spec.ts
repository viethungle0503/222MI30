import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise62Component } from './exercise62.component';

describe('Exercise62Component', () => {
  let component: Exercise62Component;
  let fixture: ComponentFixture<Exercise62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise62Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
