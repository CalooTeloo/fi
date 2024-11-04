import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() currentSpriteUrl: string = '';
  @Output() imageError = new EventEmitter<string>();

  isLoading: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentSpriteUrl']) {
      this.isLoading = true;
    }
  }

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.isLoading = false;
    this.imageError.emit(this.currentSpriteUrl);
  }
}