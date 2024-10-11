import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from './service/user.service';
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
    if(typeof sessionStorage !== 'undefined') {
      if (sessionStorage.getItem('user') == null) {
        this.router.navigate(['/connexion']);
      }
    }
  }

  onActivate(componentRef: any) {
    if(componentRef instanceof ConnexionPageComponent){
      componentRef.connexionEvent.subscribe((info: string) => {
      if (this.userService.setUser(info)){
        this.router.navigate(['/home']);
      }
    });
  }
}
}

