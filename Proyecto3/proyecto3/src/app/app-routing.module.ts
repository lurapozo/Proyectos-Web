import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorialComponent } from './editorial/editorial.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LoginComponent } from './login/login.component';
import { PrincpalComponent } from './princpal/princpal.component';
import { ComicsComponent } from './comics/comics.component';




const routes: Routes = [
  { path: "editorial/:id", component: EditorialComponent },
  { path: "favoritos", component: FavoritosComponent },
  { path: "login", component: LoginComponent },
  { path: "principal", component: PrincpalComponent },
  { path: "comic", component: ComicsComponent },
  { path: "**", redirectTo: "principal" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
