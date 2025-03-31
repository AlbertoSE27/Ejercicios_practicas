const user1 = {
  name: "David",
  money: 300,
};
const user2 = {
  name: "Carlos",
  situation: "No aporta dinero",
};
const user3 = {
  name: "Maria",
  situation: "Me ha dejado un boli",
};
function findAnimal() {
  return "Gato";
}
const myMap = new Map([
  ["moroso", user1],
  ["agarrado", user2],
  ["generoso", user3],
  ["funcion", findAnimal],
  ["color", "Amarillo"],
]);
console.log(myMap);
console.log(myMap.has("moroso"));
console.log(myMap.has("hola"));
console.log(myMap.size);
myMap.delete("agarrado");
console.log(myMap);
console.log(myMap.clear);
