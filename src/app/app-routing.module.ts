import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dreamTeamComponent } from './dream-team/dream-team.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { TeamSearchComponent } from './team-search/team-search.component';
import { EventsComponent } from './events/events.component';
import { PlayersComponent } from './players/players.component';
import { SearchTeamPlayersComponent } from './search-team-players/search-team-players.component';



const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'teamplayers/:id', component: SearchTeamPlayersComponent},
  {path:'player', component:PlayersComponent},
  {path:'events/:id', component:EventsComponent},
  {path:'teams', component:TeamSearchComponent},
  {path:'dreamTeam', component: dreamTeamComponent},
  {path:'login', component: LoginComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'', component:HomeComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
