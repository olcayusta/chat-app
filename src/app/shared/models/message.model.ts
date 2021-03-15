import { User } from './user.model';

export interface Message {
  id: number;
  content: string;
  creationTime: Date;
  user: User;
}
