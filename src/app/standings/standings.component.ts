import { Component, OnInit, Input, Injectable } from '@angular/core';
import { StandingsListsEntity } from '../model/models';
const fetch = require('node-fetch');


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.less']
})

export class StandingsComponent implements OnInit {
  roundStandings: StandingsListsEntity[] = [];
  season: number
  constructor(season: number) {
    this.season = season;
   }

  ngOnInit(): void {
    getStandings(this.season).then(value => {this.roundStandings});
  }
  

}
async function getStandings(season: number){
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
