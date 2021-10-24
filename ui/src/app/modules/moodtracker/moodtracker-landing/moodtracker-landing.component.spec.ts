import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodtrackerLandingComponent } from './moodtracker-landing.component';

describe('MoodtrackerLandingComponent', () => {
  let component: MoodtrackerLandingComponent;
  let fixture: ComponentFixture<MoodtrackerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodtrackerLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodtrackerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
