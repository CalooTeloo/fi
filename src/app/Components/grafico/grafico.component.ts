import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vidaPoke: number = 60;
  protePoke: number = 40;
  ataPoke: number = 80;
  idPokemon: string = '#656';  // Ejemplo de atributos
  tipoPokemon: string= 'Agua 💧';
  nombrePokemon: string = 'Froakie';
}


