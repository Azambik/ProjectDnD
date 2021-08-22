import { ComponentFixture, TestBed } from '@angular/core/testing';

import { descriptionPanelComponent } from './descriptionpanel.component';

describe('descriptionPanelComponent', () => {
  let component: descriptionPanelComponent;
  let fixture: ComponentFixture<descriptionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ descriptionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(descriptionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
