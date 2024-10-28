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
  @Input() imageUrl: string = '';
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  isLoading: boolean = false;
  isAnimating: boolean = false;

  onImageLoad() {
    this.isLoading = false;
    this.startAnimation();
  }

  startAnimation() {
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 3000);
  }

  previousPokemon() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.pokemonId.emit(-1);
    }
  }

  nextPokemon() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.pokemonId.emit(1);
    }
  }
}