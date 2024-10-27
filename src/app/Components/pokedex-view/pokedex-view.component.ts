                 import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],  // Debe incluir GraphComponent
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']  // styleUrls con plural
})
export class PokedexViewComponent {
  pokemonId: number = 0;
  pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonId + '.png';

  handlePokemon(evento: number): void {
    this.pokemonId += evento;
    this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonId + '.png';
  }
}