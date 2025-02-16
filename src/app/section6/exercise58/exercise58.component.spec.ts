import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise58Component } from './exercise58.component';

describe('Exercise58Component', () => {
  let component: Exercise58Component;
  let fixture: ComponentFixture<Exercise58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise58Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
