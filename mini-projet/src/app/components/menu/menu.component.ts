import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerListComponent } from '../burger-list/burger-list.component';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

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
  constructor(private userService: UserService,private router:Router) {}
  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user!;  // Access the user data from the service
    });
  }

  logout(){
      this.router.navigate(['/connexion']);
      sessionStorage.removeItem('user');
  }
}
