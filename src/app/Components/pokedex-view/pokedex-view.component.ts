// src/app/Components/pokedex-view/pokedex-view.component.ts

import { Component, OnInit, HostListener } from '@angular/core';
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
  isSoundOn: boolean = true;
  errorMessage: string = '';

  constructor() {
    this.currentPokemon = new PokemonModel(1, "Bulbasaur", "", 45, 49, 49, 45, ["Grass", "Poison"], 0.7, 6.9);
  }

  ngOnInit() {
    this.fetchPokemonData(1);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.handlePokemon(-1);
        break;
      case 'ArrowRight':
        this.handlePokemon(1);
        break;
      case 'ArrowUp':
        this.handlePokemon(10);
        break;
      case 'ArrowDown':
        this.handlePokemon(-10);
        break;
    }
  }

  handlePokemon(direction: number) {
    const newId = this.currentPokemon.getId() + direction;
    if (newId > 0 && newId <= 898) {
      this.fetchPokemonData(newId);
      this.playSound('assets/sounds/button-press.mp3');
    }
  }

  // Continuación de pokedex-view.component.ts

  async fetchPokemonData(id: number) {
    try {
      this.errorMessage = '';
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      this.updateCurrentPokemon(data);
      this.playSound('assets/sounds/pokemon-found.mp3');
    } catch (error) {
      this.errorMessage = 'ERROR! POKEMON NO ENCONTRADO';
      this.playSound('assets/sounds/error.mp3');
      console.error('Error fetching Pokémon:', error);
    }
  }

  updateCurrentPokemon(data: any) {
    this.currentPokemon = new PokemonModel(
      data.id,
      data.name,
      this.processSprite(data.sprites.front_default),
      data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
      data.types.map((type: any) => type.type.name),
      data.height / 10,
      data.weight / 10
    );
  }

  // Método para procesar sprites y hacerlos más pixelados
  processSprite(spriteUrl: string): string {
    // Aquí podrías implementar lógica para procesar la imagen
    // Por ahora solo retornamos la URL original
    return spriteUrl;
  }

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;
    this.playSound(this.isAnimating ?
      'assets/sounds/animation-on.mp3' :
      'assets/sounds/animation-off.mp3');
  }

  toggleSound() {
    this.isSoundOn = !this.isSoundOn;
    if (this.isSoundOn) {
      this.playSound('assets/sounds/sound-on.mp3');
    }
  }

  playSound(soundPath: string) {
    if (this.isSoundOn) {
      const audio = new Audio(soundPath);
      audio.volume = 0.3; // Volumen moderado
      audio.play().catch(error => console.error('Error playing sound:', error));
    }
  }

  handleImageError() {
    this.errorMessage = 'ERROR! IMAGEN NO DISPONIBLE';
    this.playSound('assets/sounds/error.mp3');
    this.currentPokemon.setImagen('assets/images/missing-pokemon.png');
  }

  clearError() {
    this.errorMessage = '';
    this.playSound('assets/sounds/clear.mp3');
  }

  getPokemonTypeColor(): string {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return typeColors[this.currentPokemon.getTipo()[0].toLowerCase()] || '#A8A878';
  }
}