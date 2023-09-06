import { Ship } from "./js/shipClass";
import { Gameboard } from "./js/gameboardClass";

let nS = new Ship(3)
nS.hit()
nS.hit()
nS.hit()
nS.hit()
console.log(nS)

const gb = new Gameboard(2, 2)
let ship = gb.placeShip(0, 0)
gb.receiveAttack(0, 0)
console.log(gb)