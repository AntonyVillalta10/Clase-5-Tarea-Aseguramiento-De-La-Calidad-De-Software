export function esMayorDeEdad(edad: number): boolean {
    if (typeof edad !== 'number' || isNaN(edad)) {
        throw new Error('La edad debe ser un número válido');
    }
    if (edad < 0) {
        throw new Error('La edad no puede ser negativa');
    }
    return edad >= 18;

}