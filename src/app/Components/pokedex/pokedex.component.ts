import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input({ required: true }) imageUrl = '';
  @Output() pokemonId: EventEmitter<number> = new EventEmitter;

  isAnimating = false;

  previousPokemon() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.pokemonId.emit(-1);
      setTimeout(() => this.isAnimating = false, 1000);
    }
  }

  nextPokemon() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.pokemonId.emit(1);
      setTimeout(() => this.isAnimating = false, 1000);
    }
  }

  
}