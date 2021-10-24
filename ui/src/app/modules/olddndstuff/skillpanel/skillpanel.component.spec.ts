import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skillPanelComponent } from './skillpanel.component';

describe('skillPanelComponent', () => {
  let component: skillPanelComponent;
  let fixture: ComponentFixture<skillPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ skillPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(skillPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
