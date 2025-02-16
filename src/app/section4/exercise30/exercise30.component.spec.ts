import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise30Component } from './exercise30.component';

describe('Exercise30Component', () => {
  let component: Exercise30Component;
  let fixture: ComponentFixture<Exercise30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
