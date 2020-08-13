import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgAvatarComponent } from './msg-avatar.component';

describe('MsgAvatarComponent', () => {
  let component: MsgAvatarComponent;
  let fixture: ComponentFixture<MsgAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
