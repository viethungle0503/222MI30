import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise34Component } from './exercise34.component';

describe('Exercise34Component', () => {
  let component: Exercise34Component;
  let fixture: ComponentFixture<Exercise34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
