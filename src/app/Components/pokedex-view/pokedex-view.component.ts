import { Component, HostListener } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  pokemonId: number = 1;
  pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonId + '.png';

  handlePokemon(evento: number): void {
    this.pokemonId += evento;
    if (this.pokemonId < 1) this.pokemonId = 1;
    this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonId + '.png';
  }

  constructor() {
    this.updatePokemonImage();
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.handlePokemon(1);
    } else if (event.key === 'ArrowLeft') {
      this.handlePokemon(-1);
    }
  }




  private updatePokemonImage(): void {
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }
}