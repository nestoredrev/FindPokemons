import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0, searchTerm: string = ''): Pokemon[] {
    
    if(searchTerm.length === 0) {
      return pokemons.slice(page, page + 5);
    }

    const filteredPokemons = pokemons.filter( pokemon => pokemon.name.includes( searchTerm ) );
    return filteredPokemons.slice(page, page + 5);

  }

}
