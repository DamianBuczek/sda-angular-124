import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoperComponent } from './components/stoper/stoper.component';
import { RoundsListComponent } from './components/rounds-list/rounds-list.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { SaveResultComponent } from './components/save-result/save-result.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StoperComponent,
    RoundsListComponent,
    ResultsListComponent,
    SaveResultComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
