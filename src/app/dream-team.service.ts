import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DreamTeamService {
  teamRoster: Object[] = []
  fullteam: Object[] = []
  private nextId: number = 1;
  constructor() { }


  playerList(player,name){
    let starters = {
      id: this.nextId,
      Img: player.strThumb,
      Name: player.strPlayer,
      Position: player.strPosition,
      Team: player.strTeam,
      Kit: player.strNumber,
    }
    this.nextId++;
    let starterTeam = this.teamRoster.filter((teamName)=> name === teamName["name"])
    starterTeam[0]["player"].push(starters);
  }


  playerFromTeam(player,name){
    let starters = {
      id: this.nextId,
      Img: player.strThumb,
      Name: player.strPlayer,
      Position: player.strPosition,
      Team: player.strTeam,
    }
    this.nextId++;
    let starterTeam = this.teamRoster.filter((teamName)=> name === teamName["name"])
    starterTeam[0]["player"].push(starters);
  }

  deletePlayer(id, tidx){
    let idx = this.teamRoster[tidx]['player'].findIndex(player => player['id'] === id);
    //splice out element
    this.teamRoster[tidx]['player'].splice(idx, 1);
  }

  addPlayerToField(idx,player,pos){
  this.teamRoster[idx]["positions"][pos] = player
  }

  deleteTeam(idx){
    let team = this.teamRoster.findIndex(roster => roster['id'] === idx);
    //splice out element
    this.teamRoster.splice(idx, 1);
  }

  storeTeam(teamName) {
    let fullteam = {
      name: teamName,
      player: [],
      positions: {
        GK:{},
        LB:{},
        CB:{},
        CBB:{},
        RB:{},
        LM:{},
        CM:{},
        CMM:{},
        RM:{},
        LF:{},
        RF:{},
      }
    }
    this.teamRoster.push(fullteam);
  }
  }

