import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayModelProductCatalogComponent } from './json-array-model-product-catalog.component';

describe('JsonArrayModelProductCatalogComponent', () => {
  let component: JsonArrayModelProductCatalogComponent;
  let fixture: ComponentFixture<JsonArrayModelProductCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayModelProductCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayModelProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
