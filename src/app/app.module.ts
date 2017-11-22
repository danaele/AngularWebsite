import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Angular Material
import {  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatGridListModule,
  MatSidenavModule,
  MatTabsModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { AppRoutingModule } from './app-routing.module';
import { EnConstructionComponent } from './en-construction/en-construction.component';
import { GamesComponent } from './games/games.component';
import { TravelsComponent } from './travels/travels.component'


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    EnConstructionComponent,
    GamesComponent,
    TravelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatGridListModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
