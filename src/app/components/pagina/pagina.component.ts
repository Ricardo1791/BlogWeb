import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
  providers: [PeliculaService]
})
export class PaginaComponent implements OnInit {
  public nombre: string;
  public peliculas: pelicula[];
  public favorita: pelicula;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peliculaService: PeliculaService
  ) {

    this.peliculas = this._peliculaService.getPeliculas();
   }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=> {
      console.log(params);
      this.nombre = params.nombre;
    })
    console.log(this._peliculaService.holaMundo());
  }

  redireccion(){
    this._router.navigate(["/formulario"]);
  }

  mostrarFavorita(event){
     this.favorita = event.pelicula;
  }

}
