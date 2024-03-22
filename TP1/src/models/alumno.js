class Alumno {
    constructor(username, DNI, edad) {
        this.username = username;
        this.DNI = DNI;
        this.edad = edad;
    }

    toString() {
        return `Alumno: username=${this.username}, DNI=${this.DNI}, edad=${this.edad}`;
    }
}

export default Alumno;