import { ComponentFixture, TestBed } from '@angular/core/testing';

import { characterSheetComponent } from './charactersheet.component';
         
describe('characterSheetComponent', () => {
  let component: characterSheetComponent;
  let fixture: ComponentFixture<characterSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ characterSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(characterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
