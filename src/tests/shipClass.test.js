import { Ship } from "../js/shipClass";

// hit tests
test('initial hit test', () => {
    const nS = new Ship(2)
    nS.hit()
    expect(nS.hits).toBe(1)
})

test('Hit increases by 1', () => {
    const nS = new Ship(3)
    nS.hit()
    nS.hit()
    expect(nS.hits).toBe(2)
})

test('Hits do not exceed length', () => {
    const nS = new Ship(1)
    nS.hit()
    nS.hit()
    expect(nS.hits).toBe(1)
})

// isSunk tests
test('Initial sunk test', () => {
    const nS = new Ship(1)
    nS.hit()
    expect(nS.sunk).toBe(true)
})