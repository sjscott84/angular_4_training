import { Component, OnInit } from '@angular/core';
import { Notice } from '../notice';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent implements OnInit {
  propertyNotices: Notice[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.propertyNotices = this.dataService.fetchData();
    this.dataService.fetchData()
      .subscribe(notices => this.propertyNotices = notices)

  }

}
