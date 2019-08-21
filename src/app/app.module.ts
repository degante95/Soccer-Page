import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VideosPipe } from './videos.pipe';
import { TeamSearchComponent } from './team-search/team-search.component';
import { EventsComponent } from './events/events.component';
import { PlayersComponent } from './players/players.component';
import { SearchTeamPlayersComponent } from './search-team-players/search-team-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    LoginComponent,
    SignUpComponent,
    VideosPipe,
    TeamSearchComponent,
    EventsComponent,
    PlayersComponent,
    SearchTeamPlayersComponent
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
