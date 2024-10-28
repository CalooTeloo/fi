// grafico.component.ts
import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  @Input() vidaPoke: number = 60;
  @Input() protePoke: number = 40;
  @Input() ataPoke: number = 80;
  @Input() nombrePokemon: string = 'Unknown';
  @Input() tipoPokemon: string = 'Normal';
  @Input() pokemonId: number = 1; // Ahora recibimos el ID como número
  mostrandoDetalles: boolean = false;

  // Método para formatear el ID
  formatPokemonId(): string {
    return '#' + this.pokemonId.toString().padStart(3, '0');
  }

  // Método para mostrar detalles
  mostrarDetalles() {
    this.mostrandoDetalles = !this.mostrandoDetalles;
    console.log(`Mostrando detalles del Pokémon ${this.formatPokemonId()}`);
  }

  // Método para obtener el color del tipo
  getTipoColor(): string {
    const tipoColores: { [key: string]: string } = {
      'Agua 💧': '#4592c4',
      'Fuego 🔥': '#fd7d24',
      'Planta 🌱': '#9bcc50',
      // Añade más tipos según necesites
    };
    return tipoColores[this.tipoPokemon] || '#666666';
  }


}