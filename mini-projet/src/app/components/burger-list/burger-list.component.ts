import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-list',
  standalone: true,
  imports: [],
  templateUrl: './burger-list.component.html',
  styleUrl: './burger-list.component.scss'
})
export class BurgerListComponent {
  menuElement = document.getElementsByClassName('menu')[0] as HTMLElement;

  showList() {
    this.menuElement.style.display = 'block';
  }
}
