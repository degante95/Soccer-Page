import { Component, OnInit } from '@angular/core';
import { DreamTeamService } from '../dream-team.service';

export interface Player {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.scss']
})

export class dreamTeamComponent implements OnInit {
   allTeams: Array<Object> = [];
  nameOfTeam: string = "";
  pos: string = "";

  listPosition: Player[] = [
    {value: 'GK', viewValue: 'GK'},
    {value: 'LB', viewValue: 'LB'},
    {value: 'CB', viewValue: 'CB'},
    {value: 'CBB', viewValue: 'CBB'},
    {value: 'RB', viewValue: 'RB'},
    {value: 'LM', viewValue: 'LM'},
    {value: 'CM', viewValue: 'CM'},
    {value: 'CMM', viewValue: 'CMM'},
    {value: 'RM', viewValue: 'RM'},
    {value: 'LF', viewValue: 'LF'},
    {value: 'RF', viewValue: 'RF'}
  ];

  constructor(private dreamTeam: DreamTeamService) { }

 fieldPlacement(play,idx){
  this.dreamTeam.addPlayerToField(idx,play,this.pos)
 }

  createTeam() {
    this.dreamTeam.storeTeam(this.nameOfTeam);
    this.allTeams = this.dreamTeam.teamRoster;
    console.log(this.allTeams);
  }

  deleteTeamCreated(idx){
    this.dreamTeam.deleteTeam(idx);
  }

  deletePlayer(id, tidx){
    this.dreamTeam.deletePlayer(id, tidx);
   }

  ngOnInit() {
    this.allTeams = this.dreamTeam.teamRoster;
    console.log(this.allTeams);
  }

}
