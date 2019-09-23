import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { dreamTeamComponent } from './dream-team/dream-team.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamSearchComponent } from './team-search/team-search.component';
import { EventsComponent } from './events/events.component';
import { PlayersComponent } from './players/players.component';
import { SearchTeamPlayersComponent } from './search-team-players/search-team-players.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    dreamTeamComponent,
    LoginComponent,
    SignUpComponent,
    TeamSearchComponent,
    EventsComponent,
    PlayersComponent,
    SearchTeamPlayersComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatCardModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule { }
