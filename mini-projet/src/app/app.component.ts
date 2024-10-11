import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mini-projet';
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    let user: User | undefined;
    this.userService.user$.subscribe((user) => {
      user = user;
    });
    if (user == null) {
      this.router.navigate(['/connexion']);
    }
  }

  onActivate(componentRef: any) {
    if (componentRef instanceof ConnexionPageComponent) {
      componentRef.connexionEvent.subscribe((info: string) => {
        if (this.userService.setUser(info)) {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
