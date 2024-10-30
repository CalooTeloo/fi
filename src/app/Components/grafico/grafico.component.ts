// src/app/Components/grafico/grafico.component.ts

import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModel } from '../../Models/iPokemon';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnChanges {
  @Input() pokemon!: PokemonModel;

  maxStat: number = 255; // Máximo valor posible para estadísticas de Pokémon
  statsPercentages: { [key: string]: number } = {};

  ngOnChanges() {
    this.calculatePercentages();
  }

  private calculatePercentages() {
    this.statsPercentages = {
      hp: (this.pokemon.getVida() / this.maxStat) * 100,
      attack: (this.pokemon.getAtaque() / this.maxStat) * 100,
      defense: (this.pokemon.getDefensa() / this.maxStat) * 100,
      speed: (this.pokemon.getVelocidad() / this.maxStat) * 100
    };
  }

  getStatColor(percentage: number): string {
    if (percentage >= 70) return '#4CAF50';
    if (percentage >= 40) return '#FFC107';
    return '#F44336';
  }
}