import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ɵmarkDirty as markDirty,
} from '@angular/core';
import { Message } from '../../shared/models/message.model';
import { SocketService } from '../../shared/services/socket.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.on('message').subscribe(({ event, payload }) => {
      // this.messages.push(value);
      const audio = new Audio(
        '//localhost:4200/assets/hero_decorative-celebration-02.ogg'
      );
      audio.play();
      this.messages.push(payload as Message);
      markDirty(this);

      // FIXME
      setTimeout(() => {
        const nodes = document.querySelectorAll('.chat-msg');
        nodes[nodes.length - 1].scrollIntoView({
          behavior: 'smooth',
        });
      }, 200);
    });
  }
}
