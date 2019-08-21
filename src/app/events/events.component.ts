import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventResult: any;
  teamId: string = "";
  constructor(private videoService: VideosService, private actr: ActivatedRoute) {
    this.teamId = actr.snapshot.params.id;
    console.log(this.teamId)
    videoService.callingEvent(this.teamId).subscribe(res =>{ this.eventResult = res
    console.log(res);
    })
   }
   
  


  ngOnInit() {
  }

}
