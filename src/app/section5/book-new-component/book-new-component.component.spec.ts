import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewComponentComponent } from './book-new-component.component';

describe('BookNewComponentComponent', () => {
  let component: BookNewComponentComponent;
  let fixture: ComponentFixture<BookNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
