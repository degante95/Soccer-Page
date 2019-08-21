import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersServiceService {
  saveResult: Array<any> = []
  constructor(private http: HttpClient) { }

  playerApi(player){
    console.log(player);
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player}`)
    .pipe(
      map(res => res["player"]),
      map(player => player.filter(players => players.strSport == "Soccer"))
    )
  }

  savePlayer(searchPlayer){
    this.saveResult = searchPlayer
  }

  returnSave(){
    return this.saveResult
  }

}
