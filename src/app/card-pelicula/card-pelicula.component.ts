import { Component, OnInit, Input } from '@angular/core';
import { GetPeliculasService } from '../get-peliculas.service';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent implements OnInit {

  @Input() peli: object;
  imagePath: string;
  constructor(private api: GetPeliculasService) { 
    this.imagePath = api.getImagePath();
  }

  ngOnInit() {
  }

}
