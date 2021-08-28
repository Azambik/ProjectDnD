import { ComponentFixture, TestBed } from '@angular/core/testing';

import { statPanelComponent } from './statpanel.component';

describe('statPanelComponent', () => {
  let component: statPanelComponent;
  let fixture: ComponentFixture<statPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ statPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(statPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
