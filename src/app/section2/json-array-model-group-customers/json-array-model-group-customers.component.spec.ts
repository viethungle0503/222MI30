import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayModelGroupCustomersComponent } from './json-array-model-group-customers.component';

describe('JsonArrayModelGroupCustomersComponent', () => {
  let component: JsonArrayModelGroupCustomersComponent;
  let fixture: ComponentFixture<JsonArrayModelGroupCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayModelGroupCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayModelGroupCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
