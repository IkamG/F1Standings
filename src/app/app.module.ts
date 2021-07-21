import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './standings/standings.component';
import { TableComponent } from './standings/table/table.component';
import { BaseAngluarStuffComponent } from './base-angluar-stuff/base-angluar-stuff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YearPickerComponent } from './year-picker/year-picker.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    TableComponent,
    BaseAngluarStuffComponent,
    YearPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
