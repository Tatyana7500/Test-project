import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownscrollComponent } from './dropdownscroll.component';

describe('DropdownscrollComponent', () => {
  let component: DropdownscrollComponent;
  let fixture: ComponentFixture<DropdownscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
