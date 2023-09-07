/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gameboardClass.js":
/*!**********************************!*\
  !*** ./src/js/gameboardClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipClass */ "./src/js/shipClass.js");


class Gameboard {
    constructor(length, width) {
        this.length = length
        this.width = width
        this.board = this.createBoard(length, width)
        this.allAttacks = []
        this.missedAttacks = []
        this.ships = []
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
        if (x + length > this.length || y + length > this.length)
        {
            throw new Error('The ship placement exceeds the boundaries of the board.')
        }

        if (this.board[y][x] !== null)
        {
            throw new Error('The ship placement cell already contains a ship.')
        }

        let ship = new _shipClass__WEBPACK_IMPORTED_MODULE_0__.Ship(length)

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

        this.ships.push(ship)
        return ship
    }

    receiveAttack(y, x) {

        if (this.allAttacks.includes(`[${y}, ${x}]`))
        {
            return null
        }

        let missed = true;
        const cell = this.board[y][x];
        this.allAttacks.push(`[${y}, ${x}]`)

        if (cell !== null)
        {
            cell.hit()
            missed = false;
        }

        if (missed === true)
        {
            this.missedAttacks.push(`[${y}, ${x}]`)
        }

        return cell
    }

    checkAllShipsSunk() {
        return this.ships.every(ship => ship.sunk)
    }
}



/***/ }),

/***/ "./src/js/shipClass.js":
/*!*****************************!*\
  !*** ./src/js/shipClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length
        this.hits = 0
        this.sunk = false
    }

    hit() {
        if (this.hits === this.length)
        {
            return
        }
        
        this.hits += 1
        this.isSunk()
    }

    isSunk() {
        if (this.hits === this.length)
        {
            this.sunk = true
        }
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/shipClass */ "./src/js/shipClass.js");
/* harmony import */ var _js_gameboardClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/gameboardClass */ "./src/js/gameboardClass.js");



const gb = new _js_gameboardClass__WEBPACK_IMPORTED_MODULE_1__.Gameboard(2, 2)
gb.placeShip(0, 0, 2)
gb.receiveAttack(0, 0)
gb.receiveAttack(0, 0)
console.log(gb)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRSxJQUFJLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEVBQUUsSUFBSSxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFLElBQUksRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1U7QUFDaEQ7QUFDQSxlQUFlLHlEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZENsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcENsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwQ2xhc3NcIlxyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgd2lkdGgpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKGxlbmd0aCwgd2lkdGgpXHJcbiAgICAgICAgdGhpcy5hbGxBdHRhY2tzID0gW11cclxuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXVxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJvYXJkKGxlbmd0aCwgd2lkdGgpIHtcclxuICAgICAgICBjb25zdCBib2FyZCA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChudWxsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBib2FyZC5wdXNoKG5ld0FycilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBib2FyZFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcCh5LCB4LCBsZW5ndGgsIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgaWYgKHggKyBsZW5ndGggPiB0aGlzLmxlbmd0aCB8fCB5ICsgbGVuZ3RoID4gdGhpcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzaGlwIHBsYWNlbWVudCBleGNlZWRzIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBib2FyZC4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzaGlwIHBsYWNlbWVudCBjZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwLicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aClcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1beF0gPSBzaGlwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1baV0gPSBzaGlwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxyXG4gICAgICAgIHJldHVybiBzaGlwXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayh5LCB4KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFsbEF0dGFja3MuaW5jbHVkZXMoYFske3l9LCAke3h9XWApKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtaXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgICAgIHRoaXMuYWxsQXR0YWNrcy5wdXNoKGBbJHt5fSwgJHt4fV1gKVxyXG5cclxuICAgICAgICBpZiAoY2VsbCAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwuaGl0KClcclxuICAgICAgICAgICAgbWlzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWlzc2VkID09PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goYFske3l9LCAke3h9XWApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2VsbFxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQWxsU2hpcHNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH0iLCJjbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy5oaXRzID0gMFxyXG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGl0cyArPSAxXHJcbiAgICAgICAgdGhpcy5pc1N1bmsoKVxyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9qcy9zaGlwQ2xhc3NcIjtcclxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vanMvZ2FtZWJvYXJkQ2xhc3NcIjtcclxuXHJcbmNvbnN0IGdiID0gbmV3IEdhbWVib2FyZCgyLCAyKVxyXG5nYi5wbGFjZVNoaXAoMCwgMCwgMilcclxuZ2IucmVjZWl2ZUF0dGFjaygwLCAwKVxyXG5nYi5yZWNlaXZlQXR0YWNrKDAsIDApXHJcbmNvbnNvbGUubG9nKGdiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==