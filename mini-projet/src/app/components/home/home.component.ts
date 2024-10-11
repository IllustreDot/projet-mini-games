import { Component, EventEmitter, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { StreakComponent } from '../streak/streak.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, StreakComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output() logoutEvent = new EventEmitter<String>();
  
  logout(){
    this.logoutEvent.emit("logout");
  }
}
