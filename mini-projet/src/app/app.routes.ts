import { Routes } from '@angular/router';
import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { LostComponent } from './components/lost/lost.component';
=======
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
>>>>>>> 71021b7c6d027564fe25680813a9597cfed938f1

export const routes: Routes = [
    {path: 'lost', component: LostComponent},
    {path: 'connexion', component: ConnexionPageComponent},
<<<<<<< HEAD
    {path:'home', component:HomeComponent},
    { path: '**', redirectTo: 'lost'}
=======
    {path: 'home', component:HomeComponent},
    {path: 'scoreboard', component: ScoreboardComponent},
    {path: 'games/sudoku', component: HomeComponent}, // to do
    {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path : '**', redirectTo: '/home', pathMatch: 'full'},
>>>>>>> 71021b7c6d027564fe25680813a9597cfed938f1
];