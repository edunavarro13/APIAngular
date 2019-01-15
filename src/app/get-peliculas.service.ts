import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPeliculasService {

  apiKey: string = "e988e25a5b44ea6ca0329198f4427027";
  populares : string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  trending: string = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;
  peliculaFunc = (id: number) => `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  popularMovies () {
    return new Promise((resolve, reject) => {
      this.http.get(this.populares).subscribe(result => {
        resolve(result);
      });
    });
  }

  trendingMovies () {
    return new Promise((resolve, reject) => {
      this.http.get(this.trending).subscribe(result => {
        resolve(result);
      });
    });
  }

  getImagePath() {
    return "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  }

  getPeliculaId(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.peliculaFunc(id)).subscribe(result => {
        resolve(result);
      });
    });
  }
}
