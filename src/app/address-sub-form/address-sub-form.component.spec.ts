import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSubFormComponent } from './address-sub-form.component';

describe('AddressSubFormComponent', () => {
  let component: AddressSubFormComponent;
  let fixture: ComponentFixture<AddressSubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
