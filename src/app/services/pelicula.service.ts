import { Injectable } from '@angular/core';
import { pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
    public peliculas: pelicula[];

    constructor(){
        this.peliculas = [
            new pelicula('Batman vs superman',2020,'https://www.cinemascomics.com/wp-content/uploads/2020/06/snyder-cut-batman-vs-superman-960x560.jpg'),
            new pelicula('vengadores',2018,'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/cover_290x414/public/media/image/2019/03/Vengadores%20endgame%20cartel%203.jpg'),
            new pelicula('spiderman',2017,'https://hipertextual.com/files/2019/06/hipertextual-4-trajes-spider-man-lejos-casa-nuevo-trailer-2019196176.jpg')
          ];
    }

    holaMundo(){
        return 'Hola Mundo desde el servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}
