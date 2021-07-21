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
  }
}
