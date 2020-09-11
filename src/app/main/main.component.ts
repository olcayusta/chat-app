import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit(): void {
 /*   this.chatService.getMessages().subscribe(value => {
      this.messages = value;
    });*/
  }
}
