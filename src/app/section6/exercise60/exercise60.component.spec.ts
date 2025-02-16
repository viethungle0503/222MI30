import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise60Component } from './exercise60.component';

describe('Exercise60Component', () => {
  let component: Exercise60Component;
  let fixture: ComponentFixture<Exercise60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise60Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
