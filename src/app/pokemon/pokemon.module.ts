import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PokemonlistComponent],
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
    PokemonlistComponent
  ]
})
export class PokemonModule { }
