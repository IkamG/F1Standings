import { Injectable } from '@angular/core';
import { StandingsComponent } from './standings.component';
import { YearPickerComponent } from 'src/app/year-picker/year-picker.component';
import { Observable, of } from 'rxjs';
import { StandingsListsEntity } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor() { }


  async getStandings(season: number): Promise<StandingsListsEntity[]>{
    return await fetchStandingsTable(season);
  }

}
async function fetchStandingsTable(season: number): Promise<StandingsListsEntity[]>{
  var url = `http://ergast.com/api/f1/${season}/driverStandings.json`;
  var response = await fetch(url);
  var body = await response.json();

  var value = body.MRData.StandingsTable.StandingsLists;
  var round:number = +value[0].round;
  for (let index = round-1; index > 0; index--) {
    var url = `http://ergast.com/api/f1/${season}/${index}/driverStandings.json`;
    var response = await fetch(url);
    var body = await response.json();
    value.push(...body.MRData.StandingsTable.StandingsLists);
  }
  return value;
}


