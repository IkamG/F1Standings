import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, Injectable, Inject, NgModule } from '@angular/core';
import { StandingsListsEntity } from '../model/models';
import {StandingsService} from '../standings/standings.service'

const fetch = require('node-fetch');



@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.less']
})

export class StandingsComponent implements OnInit {
  roundStandings: StandingsListsEntity[] = [];
  season: number = 2022;
  standingsService : StandingsService = new StandingsService;
  fetching: boolean = true;

  ngOnInit(): void {
    this.fetching = false;
    this.fetchStandings();
  }
  async fetchStandings (): Promise<StandingsListsEntity[]>{
    await this.standingsService.getStandings(this.season).then(value => {this.roundStandings = value});
    this.fetching = false;
    return this.roundStandings
  }
  SeasonChange (event :any ) {
    if (event.number){
      this.fetching = true;
      this.season = event.number.getFullYear();
      this.fetchStandings();
    }
  }
}
