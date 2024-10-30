// src/app/Components/pokedex/pokedex.component.ts

import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModel } from '../../Models/iPokemon';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnChanges {
  @Input() pokemon!: PokemonModel;
  @Input() isAnimating: boolean = false;
  @Output() pokemonChange = new EventEmitter<number>();

  isLoading: boolean = false;
  imageError: boolean = false;

  ngOnChanges() {
    this.imageError = false;
    this.isLoading = true;
  }

  onImageLoad() {
    this.isLoading = false;
    this.imageError = false;
  }

  onImageError() {
    this.isLoading = false;
    this.imageError = true;
  }

  previousPokemon() {
    this.pokemonChange.emit(-1);
  }

  nextPokemon() {
    this.pokemonChange.emit(1);
  }
}