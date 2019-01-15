import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPeliculasService } from '../get-peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  id: number;
  pelicula: object;
  imagePath: string;
  constructor(private route: ActivatedRoute, private api: GetPeliculasService) {
    this.imagePath = api.getImagePath();
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.api.getPeliculaId(this.id).then( resultado => this.pelicula = resultado);
  }

}
