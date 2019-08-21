import { Component, OnInit } from '@angular/core';
import { DreamTeamService } from '../dream-team.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
   allTeams: Array<Object> = [];
  nameOfTeam: string = "";

  constructor(private dreamTeam: DreamTeamService) { }

 

  createTeam() {
    this.dreamTeam.storeTeam(this.nameOfTeam);
    this.allTeams = this.dreamTeam.teamRoster;
    console.log(this.allTeams);
  }


  ngOnInit() {
    this.allTeams = this.dreamTeam.teamRoster;
    console.log(this.allTeams);
  }

}
