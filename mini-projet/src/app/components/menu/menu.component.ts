import { Component } from '@angular/core';
import { BurgerListComponent } from '../burger-list/burger-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BurgerListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {

}
