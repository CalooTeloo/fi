// pokedex.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  @Input({ required: true }) imageUrl = '';
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

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

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previousPokemon();
    } else if (event.key === 'ArrowRight') {
      this.nextPokemon();
    }
  }
}