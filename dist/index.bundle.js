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

        return ship
    }

    receiveAttack(y, x) {
        const cell = this.board[y][x];

        if (cell !== null)
        {
            cell.hit()
        }

        console.log(cell)
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



let nS = new _js_shipClass__WEBPACK_IMPORTED_MODULE_0__.Ship(3)
nS.hit()
nS.hit()
nS.hit()
nS.hit()
console.log(nS)

const gb = new _js_gameboardClass__WEBPACK_IMPORTED_MODULE_1__.Gameboard(2, 2)
let ship = gb.placeShip(0, 0)
gb.receiveAttack(0, 0)
console.log(gb)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNVO0FBQ2hEO0FBQ0EsYUFBYSwrQ0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUFTO0FBQ3hCO0FBQ0E7QUFDQSxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmRDbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXBDbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcENsYXNzXCJcclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZChsZW5ndGgsIHdpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJvYXJkKGxlbmd0aCwgd2lkdGgpIHtcclxuICAgICAgICBjb25zdCBib2FyZCA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChudWxsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBib2FyZC5wdXNoKG5ld0FycilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBib2FyZFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcCh5LCB4LCBsZW5ndGgsIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgaWYgKHggKyBsZW5ndGggPiB0aGlzLmxlbmd0aCB8fCB5ICsgbGVuZ3RoID4gdGhpcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzaGlwIHBsYWNlbWVudCBleGNlZWRzIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBib2FyZC4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzaGlwIHBsYWNlbWVudCBjZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwLicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aClcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1beF0gPSBzaGlwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1baV0gPSBzaGlwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaGlwXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayh5LCB4KSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbeV1beF07XHJcblxyXG4gICAgICAgIGlmIChjZWxsICE9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2VsbC5oaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY2VsbClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtHYW1lYm9hcmR9IiwiY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxyXG4gICAgICAgIHRoaXMuaGl0cyA9IDBcclxuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhpdHMgKz0gMVxyXG4gICAgICAgIHRoaXMuaXNTdW5rKClcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vanMvc2hpcENsYXNzXCI7XHJcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2pzL2dhbWVib2FyZENsYXNzXCI7XHJcblxyXG5sZXQgblMgPSBuZXcgU2hpcCgzKVxyXG5uUy5oaXQoKVxyXG5uUy5oaXQoKVxyXG5uUy5oaXQoKVxyXG5uUy5oaXQoKVxyXG5jb25zb2xlLmxvZyhuUylcclxuXHJcbmNvbnN0IGdiID0gbmV3IEdhbWVib2FyZCgyLCAyKVxyXG5sZXQgc2hpcCA9IGdiLnBsYWNlU2hpcCgwLCAwKVxyXG5nYi5yZWNlaXZlQXR0YWNrKDAsIDApXHJcbmNvbnNvbGUubG9nKGdiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==