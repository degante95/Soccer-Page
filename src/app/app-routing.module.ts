import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { TeamSearchComponent } from './team-search/team-search.component';
import { EventsComponent } from './events/events.component';
import { PlayersComponent } from './players/players.component';
import { SearchTeamPlayersComponent } from './search-team-players/search-team-players.component';



const routes: Routes = [
  {path:'teamplayers/:id', component: SearchTeamPlayersComponent},
  {path:'player', component:PlayersComponent},
  {path:'events/:id', component:EventsComponent},
  {path:'teams', component:TeamSearchComponent},
  {path:'favorites', component: FavoritesComponent},
  {path:'login', component: LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'', component:HomeComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
