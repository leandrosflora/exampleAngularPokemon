import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PokemonsService} from '../pokemons/Services/pokemons.service';

import {RootObject} from '../pokemons/Models/pokemon.model';

@Component({
  selector: 'mt-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: RootObject;

  constructor( private pokService: PokemonsService,
    public route: ActivatedRoute) { }

    ngOnInit() {
       this.pokService.getPokemonUrl(this.route.snapshot.params['uri'])
       .subscribe(data => this.pokemonDetail = data);
    }

}
