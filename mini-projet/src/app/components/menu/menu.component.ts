import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerListComponent } from '../burger-list/burger-list.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BurgerListComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  user!: User;
  @Output() logoutEvent = new EventEmitter<String>();


  ngOnInit() {
    this.user = {
      id: 1,
      login: sessionStorage.getItem('user') || 'Default User Name',
      streak: []
    }
  }

  logout(){
    this.logoutEvent.emit("logout");
  }
}
