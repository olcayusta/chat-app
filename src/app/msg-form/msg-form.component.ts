import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-msg-form',
  templateUrl: './msg-form.component.html',
  styleUrls: ['./msg-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MsgFormComponent implements OnInit {
  msgControl = new FormControl();

  constructor(
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
  }

  send($event: any): void {
    $event.preventDefault();

    this.socketService.sendMessage(this.msgControl.value);
    this.msgControl.patchValue('');
  }
}
