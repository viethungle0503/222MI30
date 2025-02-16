import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayModelWithEventDetailComponent } from './json-array-model-with-event-detail.component';

describe('JsonArrayModelWithEventDetailComponent', () => {
  let component: JsonArrayModelWithEventDetailComponent;
  let fixture: ComponentFixture<JsonArrayModelWithEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayModelWithEventDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayModelWithEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
