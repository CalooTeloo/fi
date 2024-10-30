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
  pokemonId: number = 1;
  isLoading: boolean = false;
  isSoundOn: boolean = true;
  isAnimating: boolean = false;
  errorMessage: string = '';

  private audio: HTMLAudioElement;
  private maxPokemonId: number = 898; // Número total de Pokémon en la National Dex

  constructor() {
    this.currentPokemon = new PokemonModel(1, "Bulbasaur", "", 45, 49, 49, 45, ["Grass", "Poison"], 0.7, 6.9);
    this.audio = new Audio();
    this.loadSoundEffects();
  }

  ngOnInit() {
    this.loadSavedState();
    this.fetchPokemonData();
  }

  private loadSoundEffects() {
    this.audio.src = 'assets/sounds/button-press.mp3';
    this.audio.load();
  }

  private playSound() {
    if (this.isSoundOn) {
      this.audio.currentTime = 0;
      this.audio.play().catch(error => console.log('Error playing sound:', error));
    }
  }

  handlePokemon(evento: number): void {
    this.playSound();
    this.pokemonId += evento;
    if (this.pokemonId < 1) this.pokemonId = 1;
    if (this.pokemonId > this.maxPokemonId) this.pokemonId = this.maxPokemonId;
    this.fetchPokemonData();
  }

  private async fetchPokemonData() {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      this.updateCurrentPokemon(data);
    } catch (error) {
      this.errorMessage = 'Error al cargar el Pokémon. Intente de nuevo.';
      console.error('Error fetching Pokémon:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private updateCurrentPokemon(data: any) {
    this.currentPokemon = new PokemonModel(
      data.id,
      data.name,
      data.sprites.front_default,
      data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
      data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
      data.types.map((type: any) => type.type.name),
      data.height / 10, // Convertir de decímetros a metros
      data.weight / 10  // Convertir de hectogramos a kilogramos
    );
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.handlePokemon(1);
        break;
      case 'ArrowLeft':
        this.handlePokemon(-1);
        break;
      case 'ArrowUp':
        this.toggleSound();
        break;
      case 'ArrowDown':
        this.toggleAnimation();
        break;
    }
  }

  toggleSound() {
    this.isSoundOn = !this.isSoundOn;
    this.playSound();
  }

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;
  }

  private saveState() {
    localStorage.setItem('pokedexState', JSON.stringify({
      pokemonId: this.pokemonId,
      isSoundOn: this.isSoundOn
    }));
  }

  private loadSavedState() {
    const savedState = localStorage.getItem('pokedexState');
    if (savedState) {
      const state = JSON.parse(savedState);
      this.pokemonId = state.pokemonId || 1;
      this.isSoundOn = state.isSoundOn !== undefined ? state.isSoundOn : true;
    }
  }

  ngOnDestroy() {
    this.saveState();
  }
}