export class Todo {

    public id: number;
    public texto: string;
    public completado: boolean;

    // los constructores son tanto para iniciaizar las variable como parar requerirlas
    // cuando le pasas por parametro una de las variables, es porque va a ser requerida
    // y las que se colocan adentro se inicilizan con la info que se le ponga

    constructor ( texto: string ) {
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        // con estas funciones, se les dice que hagarre el primer caracter y lo ponga en mayuscula
        // y luego le concatene lo demas
        this.completado = false;

        this.id = Math.random();
    }

}