export class PokemonModel {
    /**
     * Crea un nuevo Pokémon con sus datos básicos.
     * @param id - El número que identifica al Pokémon.
     * @param nombre - El nombre del Pokémon.
     * @param imagen - Las diferentes imágenes que tiene el Pokémon.
     * @param vida - La cantidad de vida que tiene el Pokémon.
     * @param ataque - La fuerza de ataque del Pokémon.
     * @param defensa - La capacidad de defenderse del Pokémon.
     * @param velocidad - La rapidez del Pokémon.
     * @param tipo - Los tipos de Pokémon que es.
     * @param altura - Que tan alto es el Pokémon.
     * @param peso - Cuanto pesa el Pokémon.
     */
    constructor(
        // Datos del Pokémon que son privados y no se pueden cambiar directamente desde afuera
        // Estos datos definen a un Pokémon
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

    // Métodos para obtener (leer) los datos del Pokémon
    /**
     * Obtiene el número de identificación del Pokémon.
     * @returns El número que identifica al Pokémon.
     */
    getId(): number { return this.id; }
    /**
     * Obtiene el nombre del Pokémon.
     * @returns El nombre del Pokémon.
     */
    getNombre(): string { return this.nombre; }
    /**
     * Obtiene las imágenes del Pokémon.
     * @returns Las diferentes imágenes del Pokémon.
     */
    getImagen(): { [key: string]: string } { return this.imagen; }
    /**
     * Obtiene la vida del Pokémon.
     * @returns La vida del Pokémon.
     */
    getVida(): number { return this.vida; }
    /**
     * Obtiene la fuerza de ataque del Pokémon.
     * @returns La fuerza de ataque del Pokémon.
     */
    getAtaque(): number { return this.ataque; }
    /**
     * Obtiene la capacidad de defensa del Pokémon.
     * @returns La capacidad de defensa del Pokémon.
     */
    getDefensa(): number { return this.defensa; }
    /**
     * Obtiene la velocidad del Pokémon.
     * @returns La velocidad del Pokémon.
     */
    getVelocidad(): number { return this.velocidad; }
    /**
     * Obtiene los tipos del Pokémon.
     * @returns Los tipos del Pokémon.
     */
    getTipo(): string[] { return this.tipo; }
    /**
     * Obtiene la altura del Pokémon.
     * @returns La altura del Pokémon.
     */
    getAltura(): number { return this.altura; }
    /**
     * Obtiene el peso del Pokémon.
     * @returns El peso del Pokémon.
     */
    getPeso(): number { return this.peso; }

    // Métodos para cambiar (escribir) los datos del Pokémon
    /**
     * Cambia el número de identificación del Pokémon.
     * @param id - El nuevo número que identificará al Pokémon.
     */
    setId(id: number): void { this.id = id; }
    /**
     * Cambia el nombre del Pokémon.
     * @param nombre - El nuevo nombre del Pokémon.
     */
    setNombre(nombre: string): void { this.nombre = nombre; }
    /**
     * Cambia las imágenes del Pokémon.
     * @param imagen - Las nuevas imágenes del Pokémon.
     */
    setImagen(imagen: { [key: string]: string }): void { this.imagen = imagen; }
    /**
     * Cambia la vida del Pokémon.
     * @param vida - La nueva vida del Pokémon.
     */
    setVida(vida: number): void { this.vida = vida; }
    /**
     * Cambia la fuerza de ataque del Pokémon.
     * @param ataque - La nueva fuerza de ataque del Pokémon.
     */
    setAtaque(ataque: number): void { this.ataque = ataque; }
    /**
     * Cambia la capacidad de defensa del Pokémon.
     * @param defensa - La nueva capacidad de defensa del Pokémon.
     */
    setDefensa(defensa: number): void { this.defensa = defensa; }
    /**
     * Cambia la velocidad del Pokémon.
     * @param velocidad - La nueva velocidad del Pokémon.
     */
    setVelocidad(velocidad: number): void { this.velocidad = velocidad; }
    /**
     * Cambia los tipos del Pokémon.
     * @param tipo - Los nuevos tipos del Pokémon.
     */
    setTipo(tipo: string[]): void { this.tipo = tipo; }
    /**
     * Cambia la altura del Pokémon.
     * @param altura - La nueva altura del Pokémon.
     */
    setAltura(altura: number): void { this.altura = altura; }
    /**
     * Cambia el peso del Pokémon.
     * @param peso - El nuevo peso del Pokémon.
     */
    setPeso(peso: number): void { this.peso = peso; }

    /**
     * Muestra la información básica del Pokémon.
     * @returns Un texto con el número, el nombre y los tipos del Pokémon.
     */
    mostrarPokemon(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Tipo: ${this.tipo.join('/')}`;
    }

    /**
     * Calcula el daño que el Pokémon hace a otro Pokémon.
     * @param poderAtaque - La fuerza del ataque que se usa.
     * @param defensaOponente - La capacidad de defensa del otro Pokémon.
     * @returns El daño que el Pokémon hace.
     */
    calcularDaño(poderAtaque: number, defensaOponente: number): number {
        // Calcula el daño básico basado en el ataque del Pokémon y el ataque usado
        const daño = Math.floor((this.ataque * poderAtaque) / defensaOponente);
        // El daño nunca puede ser menor a 1
        return Math.max(1, daño);
    }
}