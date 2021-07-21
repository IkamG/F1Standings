import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './standings/table/table.component';
import { BaseAngluarStuffComponent } from './base-angluar-stuff/base-angluar-stuff.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'angularstuff', component: BaseAngluarStuffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
