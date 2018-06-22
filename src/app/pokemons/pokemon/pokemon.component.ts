
import { OnInit, Input, Component } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';

@Component({
  selector: 'mt-pokemon',
  templateUrl: './pokemon.component.html'
})

export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
