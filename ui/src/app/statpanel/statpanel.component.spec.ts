import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatpanelComponent } from './statpanel.component';

describe('StatpanelComponent', () => {
  let component: StatpanelComponent;
  let fixture: ComponentFixture<StatpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
