import { Injectable } from '@angular/core';
import { StandingsComponent } from './standings.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor() { }


  getStandings(season: number): Promise<StandingsComponent[]>{
    return fetchStandingsTable(season);
  }

}
async function fetchStandingsTable(season: number): Promise<StandingsComponent[]>{
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


