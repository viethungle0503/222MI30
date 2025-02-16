import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise29Component } from './exercise29.component';

describe('Exercise29Component', () => {
  let component: Exercise29Component;
  let fixture: ComponentFixture<Exercise29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
