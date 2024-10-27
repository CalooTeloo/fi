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


  previousPokemon() {
    this.pokemonId.emit(-1);

  }
  nextPokemon() {
    this.pokemonId.emit(+1);

  }
}