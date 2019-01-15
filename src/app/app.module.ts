import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GetPeliculasService } from './get-peliculas.service';
import { CardPeliculaComponent } from './card-pelicula/card-pelicula.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { HomeComponent } from './home/home.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPeliculaComponent,
    TrendingMoviesComponent,
    HomeComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetPeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
