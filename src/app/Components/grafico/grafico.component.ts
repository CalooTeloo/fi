import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  vidaPoke: number = 60; // Vida del Pokémon
  protePoke: number = 40; // Defensa del Pokémon
  ataPoke: number = 80;   // Ataque del Pokémon
  idPokemon: string = '#656'; // ID del Pokémon
  tipoPokemon: string = 'Agua 💧'; // Tipo del Pokémon
  nombrePokemon: string = 'Froakie'; // Nombre del Pokémon
  peso: number = 9; // Peso del Pokémon en kg
  altura: number = 0.6; // Altura del Pokémon en m

  // Método para actualizar las estadísticas si es necesario
  actualizarEstadisticas(vida: number, defensa: number, ataque: number): void {
    this.vidaPoke = vida;
    this.protePoke = defensa;
    this.ataPoke = ataque;
  }
}