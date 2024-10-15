import { Streak } from './streak.model';

export interface User {
  id: number;
  login: string;
  streak: number;
  streaks: Streak[];
}
