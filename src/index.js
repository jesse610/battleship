import { Ship } from "./js/shipClass";
import { Gameboard } from "./js/gameboardClass";

const gb = new Gameboard(2, 2)
gb.placeShip(0, 0, 2)
gb.receiveAttack(0, 0)
gb.receiveAttack(0, 0)
console.log(gb)