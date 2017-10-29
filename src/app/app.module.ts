import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NoticeComponent } from './notice/notice.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NoticeBoardComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
