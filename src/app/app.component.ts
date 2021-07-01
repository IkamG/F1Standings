import { Component } from '@angular/core';
import { StandingsListsEntity } from './model/models';
const fetch = require('node-fetch');
var value: StandingsListsEntity[];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  ngOnInit(): void {
    getStandings();
  }
  title = value;
}
async function getStandings(){
  var response = await fetch('http://ergast.com/api/f1/current/driverStandings.json');
  var body = await response.json();

  value = body.MRData.StandingsTable.StandingsLists;
  var year = value[0].season;
  var round:number = +value[0].round;
  for (let index = round-1; index > 0; index--) {
    var url = `http://ergast.com/api/f1/${year}/${index}/driverStandings.json`;
    var response = await fetch(url);
    var body = await response.json();
    value.push(...body.MRData.StandingsTable.StandingsLists);
  }
}