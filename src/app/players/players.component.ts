import { Component, OnInit } from '@angular/core';
import { PlayersServiceService } from '../players-service.service';
import { DreamTeamService } from '../dream-team.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  searchplayer: string = "";
  playerResult: Array<object>;
  constructor(private playerService: PlayersServiceService, private dream: DreamTeamService) { }
  
  created = this.dream.teamRoster

  playerButton(){
    this.playerService.playerApi(this.searchplayer).subscribe(res => { this.playerResult = res
      this.playerService.savePlayer(res)
      console.log(res)
    })
  }


  teamCreated(player, name) {
    this.dream.playerList(player, name);
  }

  ngOnInit() {
    this.playerResult = this.playerService.returnSave()
  }

}
