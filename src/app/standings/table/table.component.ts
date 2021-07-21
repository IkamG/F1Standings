import { Component, OnInit } from '@angular/core';
import { YearPickerComponent } from 'src/app/year-picker/year-picker.component';
import { StandingsComponent } from '../standings.component'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
