//PRIMER CÓDIGO REFACTORIZADO
const user2 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profesion: "Barro man",
};

function nameUser2(user2) {
  const { name, last } = user2;
  return name + last;
}

console.log(nameUser2(user2));

//SEGUNDO CÓDIGO REFACTORIZADO
const user1 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user1) {
  const nameLastNameSalary = ` Me llamo ${user1.name} ${user1.last} y cobro ${user1.salary} euros`;
  return nameLastNameSalary;
}

console.log(userData(user1));

//TERCER CÓDIGO REFRACCIONADO
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  if (user.nationality == "España") return "No ayudas";
  if (user.age !== 30) return "No ayudas";
  return user;
}
console.log(esExtrangero(user));
