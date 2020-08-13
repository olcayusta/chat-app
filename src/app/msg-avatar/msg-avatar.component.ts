import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-msg-avatar',
  templateUrl: './msg-avatar.component.html',
  styleUrls: ['./msg-avatar.component.scss']
})
export class MsgAvatarComponent implements OnInit {
  @Input() avatar: string;

  constructor() { }

  ngOnInit(): void {
  }

}
