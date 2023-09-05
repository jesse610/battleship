import { Gameboard } from "../js/gameboardClass";

test('board is created', () => {
    const gboard = new Gameboard(2, 2)
    expect(gboard.board).toStrictEqual([[null, null],
                                        [null, null]])
})

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

test('Throw error if ship length exceeds board', () => {
    const gb = new Gameboard(2, 2)
    expect(() => gb.placeShip(0, 0, 3)).toThrow('The ship placement exceeds the boundaries of the board.')
})
test.todo('Throw error if another ship already in cell')