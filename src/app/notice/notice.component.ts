import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  @Input() notice

  constructor() { }

  ngOnInit() {
  }

}
