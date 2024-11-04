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
  currentSpriteIndex: number = 0;
  spriteKeys: string[] = ['default', 'shiny', 'backDefault', 'backShiny', 'officialArtwork', 'dreamWorld', 'homeDefault', 'homeShiny'];

  constructor() {
    this.currentPokemon = new PokemonModel(1, "Bulbasaur", {}, 45, 49, 49, 45, ["Grass", "Poison"], 0.7, 6.9);
  }

  ngOnInit() {
    this.fetchPokemonData(1);
  }

  handlePokemon(direction: number) {
    const newId = this.currentPokemon.getId() + direction;
    if (newId > 0 && newId <= 898) { // Limitamos a los Pokémon disponibles en la API
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
    const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const images = {
      default: `${baseUrl}${data.id}.png`,
      shiny: `${baseUrl}shiny/${data.id}.png`,
      backDefault: `${baseUrl}back/${data.id}.png`,
      backShiny: `${baseUrl}back/shiny/${data.id}.png`,
      officialArtwork: `${baseUrl}other/official-artwork/${data.id}.png`,
      dreamWorld: `${baseUrl}other/dream-world/${data.id}.svg`,
      homeDefault: `${baseUrl}other/home/${data.id}.png`,
      homeShiny: `${baseUrl}other/home/shiny/${data.id}.png`
    };

    this.currentPokemon = new PokemonModel(
      data.id,
      data.name,
      images,
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

  handleImageError(spriteKey: string) {
    console.warn(`Error loading image for sprite: ${spriteKey}`);
    // Puedes implementar una lógica para manejar errores de carga de imágenes específicas
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

  changeSprite(direction: number) {
    this.currentSpriteIndex = (this.currentSpriteIndex + direction + this.spriteKeys.length) % this.spriteKeys.length;
  }

  getCurrentSpriteKey(): string {
    return this.spriteKeys[this.currentSpriteIndex];
  }

  getCurrentSpriteUrl(): string {
    const currentKey = this.getCurrentSpriteKey();
    return this.currentPokemon.getImagen()[currentKey] || '';
  }
}