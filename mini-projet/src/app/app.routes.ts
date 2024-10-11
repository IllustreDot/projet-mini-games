import { Routes } from '@angular/router';
import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { HomeComponent } from './components/home/home.component';
import { LostComponent } from './components/lost/lost.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

export const routes: Routes = [
    {path: 'lost', component: LostComponent},
    {path: 'connexion', component: ConnexionPageComponent},
    {path:'home', component:HomeComponent},
    {path: 'scoreboard', component: ScoreboardComponent},
    {path: 'games/sudoku', component: HomeComponent}, // to do
    {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: 'lost'},

];