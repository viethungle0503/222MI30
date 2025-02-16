import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayModelComponent } from './json-array-model.component';

describe('JsonArrayModelComponent', () => {
  let component: JsonArrayModelComponent;
  let fixture: ComponentFixture<JsonArrayModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
