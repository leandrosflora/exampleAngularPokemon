import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from '../../app.error-handler';
import 'rxjs/add/operator/do';
import { Pokemons } from '../Models/pokemons.model';

@Injectable()
export class PokemonsService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: Http) { }

  getPokemons(qtdePagina, pagina){
    return <Observable<Pokemons>>this.http.get(this.url + "?limit="+qtdePagina+"&offset="+pagina)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  getPokemonUrl(urlParameter){
    return this.http.get(urlParameter)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

}
