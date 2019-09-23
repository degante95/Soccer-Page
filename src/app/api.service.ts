import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  teamSearch: Array<any>=[]
  constructor(private http: HttpClient) { }

  callingApi(searchBox){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchBox}`)
    .pipe(
       map(res => res["teams"]),
       map(team => team.filter(teams => teams.strSport == "Soccer"))
    )
  }

  callingEvent(searchEvent){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${searchEvent}`)
    .pipe(
       map(res => res["events"])
    )
    }

    callingTeamPlayers(searchTeam){
      return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${searchTeam}`)
      .pipe(
         map(res => res["player"])
      )
      }

  saveTeam(searchTeam){
    this.teamSearch = searchTeam
  }
  returnSaveTeam(){
    return this.teamSearch
  }

}
