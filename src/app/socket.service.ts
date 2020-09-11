import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

interface SubjectData {
  event: string;
  payload: object;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject: WebSocketSubject<SubjectData> = webSocket('ws://localhost:1234');
  // subject: WebSocketSubject<SubjectData> = webSocket('ws://localhost/wsapp/');

  constructor() {
  }

  // get message by event name
  on(event: string): Observable<{ event: string, payload: object }> {
    return new Observable(subscriber => {
      this.subject.subscribe(value => {
        if (value.event === event) {
          subscriber.next(value);
        }
      });
    });
  }

  // send message to server
  sendMessage(message: string): void {
    this.subject.subscribe();
    this.subject.next({
      event: 'message',
      payload: {
        content: message
      }
    });
  }
}
