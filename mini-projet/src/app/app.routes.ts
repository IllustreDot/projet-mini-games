import { Routes } from '@angular/router';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

export const routes: Routes = [
    {path: 'connexion', component: ConnexionPageComponent},
    {path: 'home', component:HomeComponent},
    {path: 'scoreboard', component: ScoreboardComponent},
    {path: 'games/sudoku', component: HomeComponent}, // to do
    {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path : '**', redirectTo: '/home', pathMatch: 'full'},
];