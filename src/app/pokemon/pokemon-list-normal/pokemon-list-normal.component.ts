import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-list-normal',
  templateUrl: './pokemon-list-normal.component.html',
  styleUrls: ['./pokemon-list-normal.component.css']
})
export class PokemonListNormalComponent implements OnInit, AfterViewInit {

  pokemons: Pokemon[] = [];
  page: number = 0;
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.pokemonService.getAllPokemons().subscribe( pokemons => {
      this.pokemons = pokemons;
    })
  }

  applyFilter( txtSearch: string ) {
    this.page = 0;
    this.searchTerm = txtSearch;
  }

  nextPage () {
    this.page += 5;
  }

  prevPage() {
    if(this.page > 0) {
      this.page -= 5;
    }
  }

}
