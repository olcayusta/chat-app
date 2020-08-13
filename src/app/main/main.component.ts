import {Component, OnInit} from '@angular/core';
import {Message} from '../message.model';
import {FormControl} from '@angular/forms';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  messages: Message[] = [];
  msgControl = new FormControl();

  constructor(
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
  }

  send($event: any): void {
    $event.preventDefault();
    this.messages.push({
      id: 1,
      content: this.msgControl.value,
      creationTime: new Date(),
      user: {
        id: 0,
        displayName: 'Olcay Usta',
        picture: 'https://a.rsg.sc/s/RDR2/n/rdr2_molly_oshea_256x256.png',
      }
    });

    this.socketService.sendMessage(this.msgControl.value);
    this.msgControl.patchValue('');

    // Sonra fixlenecek...
    setTimeout(() => {
      const nodes = document.querySelectorAll('.chat-msg');
      console.log(nodes[nodes.length - 1]);
      nodes[nodes.length - 1].scrollIntoView({
        behavior: 'smooth'
      });
    }, 200);
  }
}
