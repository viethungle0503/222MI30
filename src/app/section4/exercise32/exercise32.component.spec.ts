import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise32Component } from './exercise32.component';

describe('Exercise32Component', () => {
  let component: Exercise32Component;
  let fixture: ComponentFixture<Exercise32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
