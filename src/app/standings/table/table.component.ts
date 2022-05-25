import { Component, OnInit, Input, SimpleChanges, ViewChild } from '@angular/core';
import { YearPickerComponent } from 'src/app/year-picker/year-picker.component';
import { StandingsComponent } from '../standings.component';
import {
  driverData,
  racePointData,
  StandingsListsEntity,
  StandingsTable,
} from 'src/app/model/models';
import { ThrowStmt } from '@angular/compiler';
import * as shape from 'd3-shape';
import {CustomLinerChartService} from '../../custom-comps/custom-charts'
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'standings-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
  @Input() roundStandings: StandingsListsEntity[] = [];
  @ViewChild('chart') chart: any;
  customLinerChartService : CustomLinerChartService = new CustomLinerChartService;
  tableData: driverData[] = [];
  chartLoading: boolean = false;
  numOfDrivers: number = 20;
  curve: any = shape.curveMonotoneX;
  constructorColors: any[] = []
  dots : boolean = false;
  dict : Record<string,string> = {
    "Toro Rosso":"#0000FF",
    "Force India":"#FF80C7",
    "Renault":"#FFD800",
    "Sauber":"#006EFF",
    "Marussia":"#6E0000",
    "Lotus":"#FFB800",
    "Alfa Romeo":"#B12039",
    "AlphaTauri":"#4E7C9B",
    "Alpine F1 Team":"#2293D1",
    "Aston Martin":"#2D826D",
    "Ferrari":"#ED1C24",
    "Haas F1 Team":"#B6BABD",
    "McLaren":"#F58020",
    "Mercedes":"#6CD3BF",
    "Red Bull":"#1E5BC6",
    "Williams":"#37BEDD",    
  }
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    this.chartLoading = false;
    this.massageData();
  }
  ngAfterViewChecked() {
    if(!this.dots){
		  this.dots = this.customLinerChartService?.showDots(this.chart);
    }
	}
  massageData(): void {
    this.tableData = [];
    this.roundStandings.forEach((element) => {
      element.DriverStandings?.forEach((driver) => {
        if (!this.tableData.some((e) => e.identifier === driver.Driver.driverId)) {
          var intialRace = [
            { value: parseInt(driver.position), name: element.round, driverInfo : driver },
          ];
          this.tableData.unshift({
            name: driver.Driver.givenName[0] + " " + driver.Driver.familyName,
            series: intialRace,
            identifier: driver.Driver.driverId,
            Driver: driver.Driver,
            Constructors: driver.Constructors
          });
        } else {
          let i = this.tableData.findIndex(
            (e) => e.identifier === driver.Driver.driverId
          );
          var race = { value: parseInt(driver.position), name: element.round, driverInfo : driver };
          this.tableData[i].series?.unshift(race);
        }
      });
    });
    this.numOfDrivers = this.tableData.length;
    this.colorSelect();
    this.tableData = [...this.tableData.reverse()];
    this.dots = false;
    this.chartLoading = true;

    return;
  }

  graphUpdate() {}
  onSelect(data: any): void {
  }

  onActivate(data: any): void {
    // if(!this.dots){
    //   this.customLinerChartService?.showDots(this.chart);
    //   this.dots = true;
    // }
  }

  colorSelect() {
    let result: any[] = [];
    for (let i = 0; i < this.tableData.length; i++) {
        if (this.dict[this.tableData[i].Constructors![0].name] != null) {
          result.push({"name": this.tableData[i].name,"value": this.dict[this.tableData[i].Constructors![0].name]});
        }
    }
    this.constructorColors=result;
  } 
  onDeactivate(data: any): void {
  }

  singlePoint(data: any) : any{
    return "<span class=\"tooltipDriverName\">" + data.series + "</span><br>" + "<span class=\"tooltipDriverPoints\">" + data.driverInfo.points + " Points </span> <br>" + "Finished Round " +  data.name + " in P" + data.driverInfo.positionText + "\n";
  }
}
