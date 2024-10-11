import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-streak',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './streak.component.html',
  styleUrl: './streak.component.scss',
})
export class StreakComponent {
  date : Date = new Date();
  user!: User;
  constructor(private userService: UserService) {
    this.userService.user$.subscribe(user => {
      this.user = user!;
    });
  }
}
