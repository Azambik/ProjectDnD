import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackPanelComponent } from './attack-panel.component';

describe('AttackPanelComponent', () => {
  let component: AttackPanelComponent;
  let fixture: ComponentFixture<AttackPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
