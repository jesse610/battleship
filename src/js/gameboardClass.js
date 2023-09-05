import { Ship } from "./shipClass"

class Gameboard {
    constructor(length, width) {
        this.length = length
        this.width = width
        this.board = this.createBoard(length, width)
    }

    createBoard(length, width) {
        const board = []
        for (let i = 0; i < width; i++)
        {
            let newArr = []
            for (let j = 1; j <= length; j++)
            {
                newArr.push(null)
            }

            board.push(newArr)
        }

        return board
    }

    placeShip(y, x, length, orientation = 'horizontal') {
        let ship = new Ship(length)

        if (x + length > this.length || y + length > this.length)
        {
            throw new Error('The ship placement exceeds the boundaries of the board.')
        }

        if (orientation === 'vertical')
        {
            for (let i = y; i < y + length; i++)
            {
                this.board[i][x] = ship
            }
        }
        else
        {
            for (let i = x; i < x + length; i++)
            {
                this.board[y][i] = ship
            }
        }
    }
}

export {Gameboard}