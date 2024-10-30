// src/app/Models/iPokemon.ts

export class PokemonModel {
    constructor(
        private id: number,
        private nombre: string,
        private imagen: string,
        private vida: number,
        private ataque: number,
        private defensa: number,
        private velocidad: number,
        private tipo: string[],
        private altura: number,
        private peso: number
    ) { }

    // Getters
    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getImagen(): string {
        return this.imagen;
    }

    getVida(): number {
        return this.vida;
    }

    getAtaque(): number {
        return this.ataque;
    }

    getDefensa(): number {
        return this.defensa;
    }

    getVelocidad(): number {
        return this.velocidad;
    }

    getTipo(): string[] {
        return this.tipo;
    }

    getAltura(): number {
        return this.altura;
    }

    getPeso(): number {
        return this.peso;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    setVida(vida: number): void {
        this.vida = vida;
    }

    setAtaque(ataque: number): void {
        this.ataque = ataque;
    }

    setDefensa(defensa: number): void {
        this.defensa = defensa;
    }

    setVelocidad(velocidad: number): void {
        this.velocidad = velocidad;
    }

    setTipo(tipo: string[]): void {
        this.tipo = tipo;
    }

    setAltura(altura: number): void {
        this.altura = altura;
    }

    setPeso(peso: number): void {
        this.peso = peso;
    }

    // Métodos adicionales
    mostrarPokemon(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Tipo: ${this.tipo.join('/')}`;
    }

    calcularDaño(poderAtaque: number, defensaOponente: number): number {
        const daño = Math.floor((this.ataque * poderAtaque) / defensaOponente);
        return Math.max(1, daño); // Asegura que el daño mínimo sea 1
    }

    // Método para obtener el color basado en el tipo principal del Pokémon
    getColorTipo(): string {
        const tiposPokemon: { [key: string]: string } = {
            'Normal': '#A8A878',
            'Fire': '#F08030',
            'Water': '#6890F0',
            'Electric': '#F8D030',
            'Grass': '#78C850',
            'Ice': '#98D8D8',
            'Fighting': '#C03028',
            'Poison': '#A040A0',
            'Ground': '#E0C068',
            'Flying': '#A890F0',
            'Psychic': '#F85888',
            'Bug': '#A8B820',
            'Rock': '#B8A038',
            'Ghost': '#705898',
            'Dragon': '#7038F8',
            'Dark': '#705848',
            'Steel': '#B8B8D0',
            'Fairy': '#EE99AC'
        };

        return tiposPokemon[this.tipo[0]] || '#A8A878'; // Color por defecto si no se encuentra el tipo
    }
}