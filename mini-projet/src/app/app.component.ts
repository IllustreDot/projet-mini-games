import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mini-projet';
  user!: User;
  constructor(private router: Router,private userService: UserService) {}



  ngOnInit() {
      if(this.user == null) {
        this.router.navigate(['/connexion']);
      }
  }
}

