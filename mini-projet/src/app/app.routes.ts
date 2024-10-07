import { Routes } from '@angular/router';
import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { HomeComponent } from './components/home/home.component';
import { LostComponent } from './components/lost/lost.component';

export const routes: Routes = [
    {path: 'lost', component: LostComponent},
    {path: 'connexion', component: ConnexionPageComponent},
    {path:'home', component:HomeComponent},
    { path: '**', redirectTo: 'lost'}
];