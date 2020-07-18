import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersSettingsComponent } from './timers-settings.component';

describe('TimersSettingsComponent', () => {
  let component: TimersSettingsComponent;
  let fixture: ComponentFixture<TimersSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
