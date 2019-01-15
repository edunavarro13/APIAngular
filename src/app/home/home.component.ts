import { Component, OnInit } from '@angular/core';
import { GetPeliculasService } from '../get-peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: Array<object>;

  constructor(private api: GetPeliculasService) { 
    this.api.popularMovies().then((resultado) => this.datos = resultado["results"]);
   }

  ngOnInit() {
  }

}
