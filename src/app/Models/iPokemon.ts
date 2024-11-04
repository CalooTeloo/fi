export class PokemonModel {
    constructor(
        private id: number,
        private nombre: string,
        private imagen: { [key: string]: string },
        private vida: number,
        private ataque: number,
        private defensa: number,
        private velocidad: number,
        private tipo: string[],
        private altura: number,
        private peso: number
    ) { }

    // Getters
    getId(): number { return this.id; }
    getNombre(): string { return this.nombre; }
    getImagen(): { [key: string]: string } { return this.imagen; }
    getVida(): number { return this.vida; }
    getAtaque(): number { return this.ataque; }
    getDefensa(): number { return this.defensa; }
    getVelocidad(): number { return this.velocidad; }
    getTipo(): string[] { return this.tipo; }
    getAltura(): number { return this.altura; }
    getPeso(): number { return this.peso; }

    // Setters
    setId(id: number): void { this.id = id; }
    setNombre(nombre: string): void { this.nombre = nombre; }
    setImagen(imagen: { [key: string]: string }): void { this.imagen = imagen; }
    setVida(vida: number): void { this.vida = vida; }
    setAtaque(ataque: number): void { this.ataque = ataque; }
    setDefensa(defensa: number): void { this.defensa = defensa; }
    setVelocidad(velocidad: number): void { this.velocidad = velocidad; }
    setTipo(tipo: string[]): void { this.tipo = tipo; }
    setAltura(altura: number): void { this.altura = altura; }
    setPeso(peso: number): void { this.peso = peso; }

    // Métodos adicionales
    mostrarPokemon(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Tipo: ${this.tipo.join('/')}`;
    }

    calcularDaño(poderAtaque: number, defensaOponente: number): number {
        const daño = Math.floor((this.ataque * poderAtaque) / defensaOponente);
        return Math.max(1, daño);
    }
}