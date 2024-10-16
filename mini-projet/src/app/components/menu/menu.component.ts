import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerListComponent } from '../burger-list/burger-list.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BurgerListComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  user!: User;
  constructor(private userService: UserService, private router: Router) {
    this.userService.user$.subscribe((user) => {
      this.user = user!;
    });
  }
  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.user = user!;
    });
  }

  logout() {
    this.userService.logout();
  }
}
