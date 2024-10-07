import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

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
}
