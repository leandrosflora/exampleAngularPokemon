import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemons/:uri', component: PokemonDetailComponent}
]
