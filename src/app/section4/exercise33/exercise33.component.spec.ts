import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise33Component } from './exercise33.component';

describe('Exercise33Component', () => {
  let component: Exercise33Component;
  let fixture: ComponentFixture<Exercise33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
