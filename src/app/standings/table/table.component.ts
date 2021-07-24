import { Component, OnInit } from '@angular/core';
import { YearPickerComponent } from 'src/app/year-picker/year-picker.component';
import { StandingsComponent } from '../standings.component'
import { StandingsTable } from 'src/app/model/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  Standings : StandingsComponent = new StandingsComponent(2020);
  
  constructor() { }

  ngOnInit(): void {

  }
  test (event :any ) {
    this.Standings.season = event.number.getFullYear();
  }
}
