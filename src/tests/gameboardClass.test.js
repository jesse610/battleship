import { Gameboard } from "../js/gameboardClass";

test('board is created', () => {
    const gboard = new Gameboard(2, 2)
    expect(gboard.board).toStrictEqual([[null, null],
                                        [null, null]])
})

// ship placement tests
test('Place ship at specific x, y cordindate', () => {
    const gb = new Gameboard(2, 2)
    gb.placeShip(0, 1, 1)
    expect(gb.board).toEqual([[null, {length: 1, hits: 0, sunk: false}],
                              [null, null]])
})

test('Ship length spans multiple gameboard cells', () => {
    const gb = new Gameboard(2, 2)
    gb.placeShip(0, 0, 2)
    expect(gb.board).toEqual(
        [
            [{length: 2, hits: 0, sunk: false}, {length: 2, hits: 0, sunk: false}],
            [null, null]
        ]
        )
})

test('vertical orientation', () => {
    const gb = new Gameboard(2, 2)
    gb.placeShip(0, 0, 2, 'vertical')
    expect(gb.board).toEqual(
        [
            [{length: 2, hits: 0, sunk: false}, null],
            [{length: 2, hits: 0, sunk: false}, null]
        ]
    )
})

// error tests
test('Throw error if ship length exceeds board', () => {
    const gb = new Gameboard(2, 2)
    expect(() => gb.placeShip(0, 0, 3)).toThrow('The ship placement exceeds the boundaries of the board.')
})

test('Throw error if another ship already in cell', () => {
    const gb = new Gameboard(2, 2)
    gb.placeShip(0, 0, 1)
    expect(() => gb.placeShip(0, 0, 1)).toThrow('The ship placement cell already contains a ship.')
})

// receiveAttack tests
xtest('initial receiveAttack test', () => {
    const gb = new Gameboard(2, 2)
    gb.placeShip(0, 1, 1)
    expect(gb.receiveAttack(0, 1)).toEqual('Hit!')
})

test('Hit correctly adds one to ship', () => {
    const gb = new Gameboard(2, 2)
    gb.placeShip(0, 0, 1)
    gb.receiveAttack(0, 0)
    let ship = gb.board[0][0]
    expect(ship.hits).toBe(1)
})

test('Hitting same cell twice for boats greater than 1 does not update hits', () => {
    const gb = new Gameboard(3, 3)
    gb.placeShip(0, 1, 2)

    let ship1 = gb.board[0][1]

    gb.receiveAttack(0, 1)
    gb.receiveAttack(0, 1)

    expect(ship1.hits).toBe(1)
})

test('Hit correctly updates ships greater than 1', () => {
    const gb = new Gameboard(3, 3)
    gb.placeShip(0, 1, 2)

    let ship1 = gb.board[0][1]

    gb.receiveAttack(0, 1)
    gb.receiveAttack(0, 2)

    expect(ship1.hits).toBe(2)
})