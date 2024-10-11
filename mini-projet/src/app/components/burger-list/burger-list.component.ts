import { Component } from '@angular/core';

import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'


@Component({
  selector: 'app-burger-list',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatMenuModule],
  templateUrl: './burger-list.component.html',
  styleUrl: './burger-list.component.scss'
})
export class BurgerListComponent {
  isDisabled = true;
}
