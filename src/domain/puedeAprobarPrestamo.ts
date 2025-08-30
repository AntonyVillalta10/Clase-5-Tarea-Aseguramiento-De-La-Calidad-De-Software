type OcupacionValida = "empleado" | "autónomo" | "desempleado";

interface Persona {
  edad: number;
  ocupacion: OcupacionValida;
  tieneDeudas: boolean;
}

function puedeAprobarPrestamo(persona: Persona): boolean {
  const ocupacionesValidas = ["empleado", "autónomo", "desempleado"];
  if (!ocupacionesValidas.includes(persona.ocupacion)) {
    throw new Error("Ocupación no válida");
  }

  // lógica ficticia de aprobación
  return persona.edad >= 18 && !persona.tieneDeudas;
}

export default puedeAprobarPrestamo; // Cambia a export default