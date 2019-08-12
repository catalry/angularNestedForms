import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-address-sub-form',
  templateUrl: './address-sub-form.component.html',
  styleUrls: ['./address-sub-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: AddressSubFormComponent
    }]
})
export class AddressSubFormComponent implements OnInit, ControlValueAccessor {
  onTouched!: () => void;

  writeValue(val: any): void {
    if(val) {
      this.myform.setValue(val, {emitEvent: false});
    }
  }
  registerOnChange(fn: any): void {
    this.myform.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.myform.disable() : this.myform.enable();
  }
  myform: FormGroup = this.fb.group({
    street: [''],
    city: ['']});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
