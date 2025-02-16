import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise59Component } from './exercise59.component';

describe('Exercise59Component', () => {
  let component: Exercise59Component;
  let fixture: ComponentFixture<Exercise59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise59Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
