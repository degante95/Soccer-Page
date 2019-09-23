import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
  selectedTeam: string = "";
  constructor(private ApiService: ApiService, private actr: ActivatedRoute, private dream: DreamTeamService) {  
    this.teamId = actr.snapshot.params.id;
    console.log(this.teamId)
    ApiService.callingTeamPlayers(this.teamId).subscribe(res =>{ this.teamResult = res
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
