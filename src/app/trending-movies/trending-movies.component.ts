import {
  Component,
  OnInit
} from '@angular/core';
import {
  GetPeliculasService
} from '../get-peliculas.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {

  datosTrending: Array < object > ;
  constructor(private api: GetPeliculasService) {
    this.api.trendingMovies().then((resultado) => this.datosTrending = resultado["results"]);
  }

  ngOnInit() {}

}
