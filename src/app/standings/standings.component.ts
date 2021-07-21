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
  season: number
  constructor(@Inject(`season`) season: number, private standingsService : StandingsService) {
    this.season = season;
   }

  ngOnInit(): void {
    this.standingsService.getStandings(this.season).then(value => {this.roundStandings});
    
  }
  

}
