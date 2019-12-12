import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { PracticalComponent } from './components/practical/practical.component';
import { HigherEducationComponent } from './components/higher-education/higher-education.component';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';

const routes: Routes = [
  {
    path:'', component: StartComponent
  },
  {
    path:'periodic-table', component: PeriodicTableComponent
  },
  {
    path:'higher-education', component: HigherEducationComponent
  },
  {
    path:'practical', component: PracticalComponent
  },
  {
    path:'analysis', component:AnalysisComponent
  }
];
/*
/periodic-table 
/higher-education
/practical
/analysis

*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
