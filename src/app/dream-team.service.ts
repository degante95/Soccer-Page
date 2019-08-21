import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DreamTeamService {
  teamRoster: object[] = []
  fullteam: object[] = []
  constructor() { }

  playerList(player,name){
    let starters = {
      Img: player.strThumb,
      Name: player.strPlayer,
      Position: player.strPosition,
      Team: player.strTeam,
      Kit: player.strNumber,
    }
    let starterTeam = this.teamRoster.filter((teamName)=> name === teamName["name"])
    starterTeam[0]["player"].push(starters);
  }


  playerFromTeam(player,name){
    let starters = {
      Img: player.strThumb,
      Name: player.strPlayer,
      Position: player.strPosition,
      Team: player.strTeam,
    }
    let starterTeam = this.teamRoster.filter((teamName)=> name === teamName["name"])
    starterTeam[0]["player"].push(starters);
  }


  storeTeam(teamName) {
    let fullteam = {
      name: teamName,
      player: []
    }
    this.teamRoster.push(fullteam);
  }







}
