import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(MatDatepicker) picker : any;
  date = new FormControl();
  constructor() {}

  yearSelected(params : any) {
    this.date.setValue(params);
    this.picker.close();
  }
}


