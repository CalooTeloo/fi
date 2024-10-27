export class Pokemon { /* Representacion de un objeto existente */
    /* No movimientos no habs */
 /*1.- POO */   
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:584155230.
    /* ATRIBUTOS 🟩🟩🟩*/
    ataque: number;
    tipo: string;
    nombre: string;
    id: number;
    defensa: number;
    vida: number;

    /* CONSTRUCTOR 🟧🟧🟧 */
    constructor(id_recibido: number, nombre_recibido: string, tipo_recibido: string, ataque_recibido: number, defensa_recibido: number, vida_recibido: number) {
        this.id = id_recibido; //Recibiendo el id como paramaetro en mi clase
        this.nombre = nombre_recibido; //Recibiendo el nombre como paramaetro en mi clase
        this.tipo = tipo_recibido; //Recibiendo el tipo como paramaetro en mi clase
        this.ataque = ataque_recibido; //Recibiendo el ataque como paramaetro en mi clase
        this.defensa = defensa_recibido; //Recibiendo el defensa como paramaetro en mi clase
        this.vida = vida_recibido; //Recibiendo el vida como paramaetro en mi clase
    }

    /* ❤️❤️❤️ */

    /* METODOS */

    public atacar() {
        console.log("Estoy atacando ⚔️")
    }

    public defender() {
        console.log("Estoy defendiendo 🛡️")
    }

    public quitarVida(cantidad_Quitar: number) {
        this.vida = this.vida - cantidad_Quitar;
        console.log("Estoy quitando vida 💔")

    }

    public agregarVida(cantidad_Agregar: number) {
        this.vida = this.vida + cantidad_Agregar;
        console.log("Estoy agregando vida ❤️")
    }

    public __str() {
        console.log("Nombre: " + this.nombre +
            " Tipo: " + this.tipo +
            " Ataque: " + this.ataque +
            " Defensa: " + this.defensa +
            " Vida: " + this.vida)
    }

}

/*2.- Encapsulamiento */
export class ejemplo {
    p1: Pokemon = new Pokemon(4, "Charmander", "Fuego", 52, 43, 39)
    p2: Pokemon = new Pokemon(7, "Squirtle", "Agua", 48, 65, 44)

}
