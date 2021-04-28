import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { PokemonListNormalComponent } from './pokemon-list-normal/pokemon-list-normal.component';

// Angular material Modules
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [ 
    PokemonlistComponent, 
    PokemonListNormalComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    PokemonlistComponent,
    PokemonListNormalComponent
  ]
})
export class PokemonModule { }
