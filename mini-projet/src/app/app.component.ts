import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mini-projet';

  constructor(private router: Router) {}

  ngOnInit() {
    if(typeof sessionStorage !== 'undefined') {
      if (sessionStorage.getItem('user') == null) {
        this.router.navigate(['/connexion']);
      }
    }
  }

  onActivate(componentRef: any) {
    if(componentRef instanceof HomeComponent) {
      componentRef.logoutEvent.subscribe((info: String) => {
        this.router.navigate(['/connexion']);
        sessionStorage.removeItem('user');
      });
    }
  }
}
