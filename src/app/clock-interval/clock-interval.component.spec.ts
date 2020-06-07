import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockIntervalComponent } from './clock-interval.component';

describe('ClockIntervalComponent', () => {
  let component: ClockIntervalComponent;
  let fixture: ComponentFixture<ClockIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClockIntervalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
