import puedeAprobarPrestamo from '../domain/puedeAprobarPrestamo';

type Persona = {
  edad: number;
  ocupacion: 'empleado' | 'autónomo' | 'desempleado';
  tieneDeudas: boolean;
};

describe('puedeAprobarPrestamo', () => {
  // ✅ Casos válidos
  it('aprueba si la persona es empleado sin deudas', () => {
    const persona: Persona = {
      edad: 30,
      ocupacion: 'empleado',
      tieneDeudas: false,
    };
    expect(puedeAprobarPrestamo(persona)).toBe(true);
  });

  it('no aprueba si la persona tiene deudas', () => {
    const persona: Persona = {
      edad: 30,
      ocupacion: 'empleado',
      tieneDeudas: true,
    };
    expect(puedeAprobarPrestamo(persona)).toBe(false);
  });

  // ❌ Casos inválidos - CORREGIDOS
  it('lanza error si la ocupación es inválida', () => {
    const persona = {
      edad: 40,
      ocupacion: 'freelancer', 
      tieneDeudas: false,
    };
    expect(() => puedeAprobarPrestamo(persona as any)).toThrow('Ocupación no válida');
  });

  it('lanza error si falta el campo ocupación', () => {
    const persona = {
      edad: 40,
      tieneDeudas: false,
    };
    expect(() => puedeAprobarPrestamo(persona as any)).toThrow('Ocupación no válida');
  });
});