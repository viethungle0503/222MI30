import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayModelWithEventComponent } from './json-array-model-with-event.component';

describe('JsonArrayModelWithEventComponent', () => {
  let component: JsonArrayModelWithEventComponent;
  let fixture: ComponentFixture<JsonArrayModelWithEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayModelWithEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayModelWithEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
