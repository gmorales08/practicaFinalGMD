export class Asignaturas {
    constructor(
        private nombre: string,
        private profesor: string,
        private conocimientos: string[],
        private ciclo: string,
        private curso: number
    ) {
        
    }
}