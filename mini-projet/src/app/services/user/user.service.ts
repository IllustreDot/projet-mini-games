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

    const temporaryUser : User = {
      id: 0,
      login: user,
      streak: 0,
      streaks: []
    };

    // If the user was not found, create a temporary one
    this.userSource.next(temporaryUser);
    sessionStorage.setItem('user', user);
    return true;
  }

  logout() {
    this.userSource.next(null);
    sessionStorage.removeItem('user');
    this.router.navigate(['/connexion']);
  }
}
