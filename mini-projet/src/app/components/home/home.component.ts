import { Component, EventEmitter, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { StreakComponent } from '../streak/streak.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, StreakComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
