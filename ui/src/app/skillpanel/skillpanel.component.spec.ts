import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillpanelComponent } from './skillpanel.component';

describe('SkillpanelComponent', () => {
  let component: SkillpanelComponent;
  let fixture: ComponentFixture<SkillpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
