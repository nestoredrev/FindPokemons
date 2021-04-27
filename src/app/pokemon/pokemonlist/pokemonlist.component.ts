import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'pic'];
  dataSource: MatTableDataSource<Pokemon>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private pokemonService: PokemonService) { }


  ngAfterViewInit(): void {
    this.pokemonService.getAllPokemons().subscribe(dataPokemons => {
      this.dataSource = new MatTableDataSource(dataPokemons);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
