// pokedex.component.ts
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
  spriteUrl: string = '';

  ngOnChanges() {
    this.imageError = false;
    this.isLoading = true;
    this.updateSpriteUrl();
  }

  updateSpriteUrl() {
    // Asumiendo que tienes acceso a sprites retro. Si no, usa la imagen normal.
    this.spriteUrl = `assets/sprites/${this.pokemon.getId().toString().padStart(3, '0')}.png`;
  }

  onImageLoad() {
    this.isLoading = false;
    this.imageError = false;
  }

  onImageError() {
    this.isLoading = false;
    this.imageError = true;
    this.spriteUrl = 'assets/sprites/missingno.png'; // Sprite para Pokémon no encontrado
  }

  previousPokemon() {
    this.pokemonChange.emit(-1);
  }

  nextPokemon() {
    this.pokemonChange.emit(1);
  }
}