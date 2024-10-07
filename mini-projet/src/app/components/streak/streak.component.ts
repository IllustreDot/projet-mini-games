import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-streak',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './streak.component.html',
  styleUrl: './streak.component.scss',
})
export class StreakComponent {
  date : Date = new Date();
}
