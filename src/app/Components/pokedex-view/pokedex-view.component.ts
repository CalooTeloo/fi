// src/app/Components/pokedex-view/pokedex-view.component.ts

import { Component, OnInit } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokemonModel } from '../../Models/iPokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent, CommonModule],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent implements OnInit {
  currentPokemon: PokemonModel;
  isAnimating: boolean = false;
  errorMessage: string = '';

  constructor() {
    this.currentPokemon = new PokemonModel(1, "Bulbasaur", "", 45, 49, 49, 45, ["Grass", "Poison"], 0.7, 6.9);
  }

  ngOnInit() {
    this.fetchPokemonData(1);
  }

  handlePokemon(direction: number) {
    const newId = this.currentPokemon.getId() + direction;
    if (newId > 0 && newId <= 151) { // Limitamos a la primera generación
      this.fetchPokemonData(newId);
    }
  }

  async fetchPokemonData(id: number) {
    try {
      this.errorMessage = '';
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      this.updateCurrentPokemon(data);
    } catch (error) {
      this.errorMessage = 'Error al cargar el Pokémon. Intente de nuevo.';
      console.error('Error fetching Pokémon:', error);
    }
  }

  updateCurrentPokemon(data: any) {
    this.currentPokemon = new PokemonModel(
      data.id,
      data.name,
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`, // URL de la imagen
      data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
      data.types.map((type: any) => type.type.name),
      data.height / 10,
      data.weight / 10
    );
  }

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;
  }

  handleImageError() {
    this.errorMessage = 'Error al cargar la imagen del Pokémon.';
    this.currentPokemon.setImagen('assets/images/missingno.png');
  }

  clearError() {
    this.errorMessage = '';
  }

  getPokemonTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878', fire: '#F08030', water: '#6890F0',
      electric: '#F8D030', grass: '#78C850', ice: '#98D8D8',
      fighting: '#C03028', poison: '#A040A0', ground: '#E0C068',
      flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
      rock: '#B8A038', ghost: '#705898', dragon: '#7038F8',
      dark: '#705848', steel: '#B8B8D0', fairy: '#EE99AC'
    };
    return typeColors[type.toLowerCase()] || '#A8A878';
  }
}