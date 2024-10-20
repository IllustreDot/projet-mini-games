import { Streak } from './streak.model';

export interface User {
  id: number;
  login: string;
  points: number;
  streak: number;
  streaks: Streak[];
}
