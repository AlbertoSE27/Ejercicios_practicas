type Bird = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSlepp: boolean;
  canFly: boolean;
};
const bird = {
  name: "Pepe",
  canEat: true,
  canDrink: true,
  canSlepp: true,
  canFly: true,
};
interface Dog extends Bird {
  race: string;
  age: 5;
}
const dog = {
  name: "Pepe",
  canEat: true,
  canDrink: true,
  canSlepp: true,
  canFly: false,
  race: "Pastor Aleman",
  age: 5,
};
interface DogTwo extends Dog {
  race: string | string | string;
}
const DogTwo = {
  name: "Pepe",
  canEat: true,
  canDrink: true,
  canSlepp: true,
  canFly: false,
  race: "Husky, Labrador, Chucho",
  age: 5,
};
interface Cat extends Bird {
  color: string;
}
type CatEspecific = Pick<Cat, "name" | "color" | "canSlepp">;
interface Snake extends Bird {}
type SnakeEspecific = Pick<Snake, "canFly" | "canDrink" | "canSlepp">;
