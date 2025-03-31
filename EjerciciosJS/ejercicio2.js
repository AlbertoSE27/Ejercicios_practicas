function obtenerDescripcion() {
  const animal = {
    tipo: "perro",
    especie: "husky",
    color: "gris",
    edad: 5,
  };

  if (!animal) return "error";
  if (animal.tipo !== "perro") return "error";
  return animal.color + animal.edad;
}
console.log(obtenerDescripcion());
