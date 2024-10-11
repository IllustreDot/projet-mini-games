import { Component, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.scss'
})
export class ConnexionPageComponent implements OnInit {
  login = new FormControl('');
  password = new FormControl('');
  formulaire = this.buttonUpdate();
  @Output() connexionEvent = new EventEmitter<String>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.login.valueChanges.subscribe(value => {
      this.formulaire = this.buttonUpdate();
    });
    this.password.valueChanges.subscribe(value => {
      this.formulaire = this.buttonUpdate();
    });
  }

  buttonUpdate() : boolean {
    if(this.login.value != '' && this.password.value != '') {
      return true;
    }
    return false;
  }

  connexionSub() : void {
    if(this.login.value == this.password.value && this.login.value != null) {
      this.connexionEvent.emit(this.login.value);
    }
  }
}
