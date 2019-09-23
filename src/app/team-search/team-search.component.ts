import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.scss']
})
export class TeamSearchComponent implements OnInit {
  searchForTeam: string = "";
  results: Array<any>;
  constructor(private ApiService: ApiService) { }
  search(){
    this.ApiService.callingApi(this.searchForTeam).subscribe(res => {this.results = res
      this.ApiService.saveTeam(res)
      console.log(this.results)}
      );
    
  }

  ngOnInit() {
    this.results = this.ApiService.returnSaveTeam()
  }

}
