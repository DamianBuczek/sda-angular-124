import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoperComponent } from './components/stoper/stoper.component';
import { RoundsListComponent } from './components/rounds-list/rounds-list.component';
import { ResultsListComponent } from './components/results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoperComponent,
    RoundsListComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
