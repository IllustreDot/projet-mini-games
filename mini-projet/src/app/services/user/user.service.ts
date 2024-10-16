// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSource = new BehaviorSubject<User | null>(null);
  user$ = this.userSource.asObservable();
  users!: User[];

  constructor(private router: Router) {
    fetch('https://664ba07f35bbda10987d9f99.mockapi.io/api/users/')
      .then((response) => response.json())
      .then((data) => {
        this.users = data; // Handle the data from the API
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Handle any errors
      });
  }

  setUser(user: string): boolean {
    for (let userInList of this.users) {
      if (user === userInList.login) {
        this.userSource.next(userInList);
        sessionStorage.setItem('user', user);
        return true; // Return true as soon as we find the user
      }
    }

    // If the user was not found, reset the user source and remove sessionStorage
    this.userSource.next(null);
    sessionStorage.removeItem('user');
    return false;
  }

  logout() {
    this.userSource.next(null);
    sessionStorage.removeItem('user');
    this.router.navigate(['/connexion']);
  }
}
