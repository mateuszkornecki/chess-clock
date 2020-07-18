import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersSynchronizerComponent } from './timers-synchronizer.component';

describe('TimersSynchronizerComponent', () => {
  let component: TimersSynchronizerComponent;
  let fixture: ComponentFixture<TimersSynchronizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersSynchronizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersSynchronizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
