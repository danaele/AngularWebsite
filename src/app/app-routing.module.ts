import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { EnConstructionComponent } from './en-construction/en-construction.component';
import { GamesComponent } from './games/games.component';
import { TravelsComponent } from './travels/travels.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: EnConstructionComponent },
  { path: 'cv',  component: CvComponent },
  { path: 'travels',  component: TravelsComponent },
  { path: 'games',  component: GamesComponent },
  { path: 'contact',  component: EnConstructionComponent },
 /* { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent } */
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}