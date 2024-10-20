import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [MenuComponent, MatListModule, CommonModule, MatPaginatorModule],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss',
})
export class ScoreboardComponent {
  users: User[] = [];
  usersView: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.users = [...this.userService.users];
    this.users.sort((a, b) => b.points - a.points);
    if (this.users.length > 0) {
      this.usersView = this.users.slice(0, 5);
    }
  }

  handlePageEvent(e: PageEvent) {
    const startIndex = e.pageIndex * e.pageSize;
    this.usersView = this.users.slice(startIndex, startIndex + e.pageSize);
  }
}
