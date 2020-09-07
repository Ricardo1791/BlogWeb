import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event,pelicula){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
