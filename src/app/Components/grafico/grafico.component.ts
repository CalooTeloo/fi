// grafico.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-container">
      <div class="pokemon-header">
        <h2 class="pokemon-name">{{nombrePokemon}}</h2>
        <div class="pokemon-type-badges">
          <span class="pokemon-type-badge" [class]="'type-' + tipoPokemon.toLowerCase()">
            {{tipoPokemon}}
          </span>
        </div>
      </div>

      <div class="stats-display">
        <div class="stat-group">
          <p class="stat-label">HP</p>
          <div class="stat-bar-container">
            <div class="stat-bar" [style.width.%]="vidaPoke">
              <div class="stat-value">{{vidaPoke}}</div>
            </div>
          </div>
        </div>

        <div class="stat-group">
          <p class="stat-label">ATTACK</p>
          <div class="stat-bar-container">
            <div class="stat-bar" [style.width.%]="ataPoke">
              <div class="stat-value">{{ataPoke}}</div>
            </div>
          </div>
        </div>

        <div class="stat-group">
          <p class="stat-label">DEFENSE</p>
          <div class="stat-bar-container">
            <div class="stat-bar" [style.width.%]="protePoke">
              <div class="stat-value">{{protePoke}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  @Input() vidaPoke: number = 60;
  @Input() protePoke: number = 40;
  @Input() ataPoke: number = 80;
  @Input() nombrePokemon: string = 'Unknown';
  @Input() tipoPokemon: string = 'Normal';
}