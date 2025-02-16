import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonObjectModelCustomerServiceComponent } from './json-object-model-customer-service.component';

describe('JsonObjectModelCustomerServiceComponent', () => {
  let component: JsonObjectModelCustomerServiceComponent;
  let fixture: ComponentFixture<JsonObjectModelCustomerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonObjectModelCustomerServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonObjectModelCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
