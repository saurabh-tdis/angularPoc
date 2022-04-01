import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPracticeComponent } from './array-practice.component';

describe('ArrayPracticeComponent', () => {
  let component: ArrayPracticeComponent;
  let fixture: ComponentFixture<ArrayPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
