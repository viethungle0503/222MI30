import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise36Component } from './exercise36.component';

describe('Exercise36Component', () => {
  let component: Exercise36Component;
  let fixture: ComponentFixture<Exercise36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise36Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
