import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimeComponent } from './pages/anime/anime.component';

const routes: Routes = [
  {path:"home", component : HomeComponent},
  {path:"categories", component : AnimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
