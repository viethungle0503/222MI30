import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonObjectModelComponent } from './json-object-model.component';

describe('JsonObjectModelComponent', () => {
  let component: JsonObjectModelComponent;
  let fixture: ComponentFixture<JsonObjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonObjectModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonObjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
