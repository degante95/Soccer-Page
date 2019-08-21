import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { ActivatedRoute } from '@angular/router';
import { DreamTeamService } from '../dream-team.service';

@Component({
  selector: 'app-search-team-players',
  templateUrl: './search-team-players.component.html',
  styleUrls: ['./search-team-players.component.scss']
})
export class SearchTeamPlayersComponent implements OnInit {

  teamResult: any;
  teamId: string = "";
  constructor(private videoService: VideosService, private actr: ActivatedRoute, private dream: DreamTeamService) {  
    this.teamId = actr.snapshot.params.id;
    console.log(this.teamId)
    videoService.callingTeamPlayers(this.teamId).subscribe(res =>{ this.teamResult = res
    console.log(res);
    })
   }

  created = this.dream.teamRoster


   addFromTeam(player, name) {
    this.dream.playerFromTeam(player, name);
  }

  ngOnInit() {

  }

}
