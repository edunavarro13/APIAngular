import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { HomeComponent } from './home/home.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';

const routes: Routes = [
  { path: 'trending', component: TrendingMoviesComponent },
  { path: 'pelicula/:id', component: DetallePeliculaComponent },
  { path: 'trending/pelicula/:id', redirectTo: '/pelicula/:id' },
  { path: '', component: HomeComponent, pathMatch: 'full' }
  // { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
