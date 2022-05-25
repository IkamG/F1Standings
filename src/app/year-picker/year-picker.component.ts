import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NativeDateAdapter, DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';


const moment = _rollupMoment || _moment;

class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    var formatString = 'YYYY';
    return moment(date).format(formatString);
  }
}


@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.less'],
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter
    }
  ]
})
export class YearPickerComponent {
  
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  maxDate : Date = new Date(Date.now());
  minDate : Date = new Date (1950,0,1);
  @ViewChild(MatDatepicker) picker : any;
  date = new FormControl();
  constructor() {
    this.date.valueChanges.subscribe(value =>{
      
    })
  }

  yearSelected(params : any) {
    this.date.setValue(params.value ?? params);
    this.picker.close();
    this.change.emit({
      number: this.date.value
    })
  }
}


