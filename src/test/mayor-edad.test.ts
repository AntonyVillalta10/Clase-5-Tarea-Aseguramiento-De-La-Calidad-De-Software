import { esMayorDeEdad } from '../domain/mayor-edad';

describe('esMayorDeEdad', () => {
  // ✅ Casos válidos
  it('retorna false si la edad es menor a 18', () => {
    expect(esMayorDeEdad(17)).toBe(false);
  });

  it('retorna true si la edad es igual a 18', () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  it('retorna true si la edad es mayor a 18', () => {
    expect(esMayorDeEdad(25)).toBe(true);
  });

  // ❌ Casos inválidos
  it('lanza error si la edad es negativa', () => {
    expect(() => esMayorDeEdad(-1)).toThrow('La edad no puede ser negativa');
  });

  it('lanza error si la edad es NaN', () => {
    expect(() => esMayorDeEdad(NaN)).toThrow('La edad debe ser un número válido');
  });

  it('lanza error si la edad es null', () => {
    expect(() => esMayorDeEdad(null as unknown as number)).toThrow('La edad debe ser un número válido');
  });

  it('lanza error si la edad es undefined', () => {
    expect(() => esMayorDeEdad(undefined as unknown as number)).toThrow('La edad debe ser un número válido');
  });

  it('lanza error si la edad es un string', () => {
    expect(() => esMayorDeEdad("18" as unknown as number)).toThrow('La edad debe ser un número válido');
  });
});
