import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumLandingComponent } from './forum-landing.component';

describe('ForumLandingComponent', () => {
  let component: ForumLandingComponent;
  let fixture: ComponentFixture<ForumLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
