import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,DoCheck,OnDestroy {

  public titulo: string;
  public mostrarTitulo: boolean;
  
  constructor() { 
    console.log("Evento constructor iniciado");
    this.titulo = "Componente test";
    this.mostrarTitulo = true;
  }

  ngOnInit(): void {
    console.log("Evento on Init iniciado");
  }

  ngDoCheck(){
    console.log("Evento do Check iniciado");
  }

  cambiarTitulo(){
    this.titulo = "Titulo cambiado";
    this.mostrarTitulo = false;
  }

  ngOnDestroy(){
    console.log("Evento on Destroy iniciado")
  }

}
