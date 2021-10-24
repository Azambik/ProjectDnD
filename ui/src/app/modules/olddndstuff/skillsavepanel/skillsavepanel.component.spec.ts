import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsavepanelComponent } from './skillsavepanel.component';

describe('SkillsavepanelComponent', () => {
  let component: SkillsavepanelComponent;
  let fixture: ComponentFixture<SkillsavepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsavepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsavepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
