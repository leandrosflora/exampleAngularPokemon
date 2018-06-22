
import { Component, OnInit } from '@angular/core';
import { Pokemons } from './Models/pokemons.model';
import { PokemonsService } from './Services/pokemons.service';


@Component({
  selector: 'mt-pokemons',
  templateUrl: './pokemons.component.html'
})

export class PokemonsComponent implements OnInit {

  public pokemons: Pokemons;

  pagina: number = 0;
	qtdPorPagina: number = 6;
  loading: boolean = false;

  constructor(private pokemonsService: PokemonsService) {
    this.loading = true;
    this.pokemonsService.getPokemons(this.qtdPorPagina, this.pagina).subscribe(
      data => {
          this.loading = false;
          this.pokemons = data;
        },
        erro => this.exibirMensagem(erro)
      );
  }

  ngOnInit() {
  }

  paginar($event: any) {
		this.pagina = $event - 1;
		this.popularGridPokemons();
  }

  popularGridPokemons() {
    this.loading = true;
    this.pokemonsService.getPokemons(this.qtdPorPagina, this.pagina).subscribe(
      data => {
          this.loading = false;
          this.pokemons = data;
        },
        erro => this.exibirMensagem(erro)
      );
      for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
        if (i >= this.pokemons.results.length) {
          this.loading = false;
          break;
        }
        this.pokemons.results.push(this.pokemons.results[i]);
        this.loading = false;
      }
  }

  exibirMensagem(mensagem: string, carregando = false, duracao = 5000) {
    // this.sb.open(mensagem, 'OK',  { duration: duracao });
    this.loading = carregando;
  }

}
