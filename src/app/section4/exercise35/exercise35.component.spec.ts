import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise35Component } from './exercise35.component';

describe('Exercise35Component', () => {
  let component: Exercise35Component;
  let fixture: ComponentFixture<Exercise35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise35Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
