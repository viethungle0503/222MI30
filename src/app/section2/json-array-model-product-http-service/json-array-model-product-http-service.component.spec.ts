import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayModelProductHttpServiceComponent } from './json-array-model-product-http-service.component';

describe('JsonArrayModelProductHttpServiceComponent', () => {
  let component: JsonArrayModelProductHttpServiceComponent;
  let fixture: ComponentFixture<JsonArrayModelProductHttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayModelProductHttpServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayModelProductHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
