import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincpalComponent } from './princpal/princpal.component';
import { EditorialComponent } from './editorial/editorial.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LoginComponent } from './login/login.component';


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatListModule} from '@angular/material/list'; 

import { HttpClientModule } from '@angular/common/http';
import { ComicsComponent } from './comics/comics.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincpalComponent,
    EditorialComponent,
    FavoritosComponent,
    LoginComponent,
    ComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
