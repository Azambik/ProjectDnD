import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionpanelComponent } from './descriptionpanel.component';

describe('DescriptionpanelComponent', () => {
  let component: DescriptionpanelComponent;
  let fixture: ComponentFixture<DescriptionpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
