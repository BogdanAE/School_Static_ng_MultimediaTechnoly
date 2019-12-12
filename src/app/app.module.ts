//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

//material stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';
import { HigherEducationComponent } from './components/higher-education/higher-education.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { PracticalComponent } from './components/practical/practical.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MainMenuComponent,
    HeaderComponent,
    FooterComponent,
    PeriodicTableComponent,
    HigherEducationComponent,
    AnalysisComponent,
    PracticalComponent
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
