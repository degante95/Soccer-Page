import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.scss']
})
export class TeamSearchComponent implements OnInit {
  searchTable: string = "";
  results: Array<any>;
  constructor(private videoService: VideosService) { }
  search(){
    this.videoService.callingApi(this.searchTable).subscribe(res => {this.results = res
      this.videoService.saveTeam(res)
      console.log(this.results)}
      );
    
  }

  ngOnInit() {
    this.results = this.videoService.returnSaveTeam()
  }

}
