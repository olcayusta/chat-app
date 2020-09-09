import {Injectable} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject = webSocket('ws://localhost:1234');

  constructor() {
  }

  // send message to server
  sendMessage(message: string): void {
    this.subject.subscribe();
    this.subject.next({
      content: message
    });
  }
}
