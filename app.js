var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	borderTable1: [],
	ships: [ // container for ships locations and hits
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],
	

	fire: function(guess) { // check guess input coordinates for match with generated ships locations
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			if (ship.hits[index] === "hit") {
				view.displayMessage("Ups, już wcześnej trafiłeś to pole!");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("TRAFIONY!");

				if (this.isSunk(ship)) {
					view.displayMessage("Zatopiłeś Okręt!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("Spudłowałeś.");
		return false;
	},

	isSunk: function(ship) { // check hits according to ships length
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
	    return true;
	},

	generateShipLocations1: function() { // generate all locations

	let ship = this.generateShip(); 
	this.ships[0].locations = ship;
	this.borderTableFiller1(); 
	do {this.ships[1].locations = this.generateShip()} 
		while (this.collision()); 
	this.borderTableFiller2();
	do {this.ships[2].locations = this.generateShip()}
	while (this.collision2());
	},

borderTableFiller1: function () { // generating additional space around generated ship to avoid stick with previous one
		let spl1CoordTop;
		let spl1CoordLeft;
		let spl1CoordRight;
		let spl1CoordBottom;
		let spl2CoordTop;
		let spl2CoordLeft;
		let spl2CoordRight;
		let spl2CoordBottom;
		let spl3CoordTop;
		let spl3CoordLeft;
		let spl3CoordRight;
		let spl3CoordBottom;

		spl1CoordLeft = ((this.ships[0].locations[0].split("")[0])) + "" + ((this.ships[0].locations[0].split("")[1] - 1)); 
		spl1CoordRight = ((this.ships[0].locations[0].split("")[0])) + "" + ((parseInt(this.ships[0].locations[0].split("")[1]) + 1)); 
        spl1CoordTop = ((parseInt(this.ships[0].locations[0].split("")[0])) - 1) + "" + ((parseInt(this.ships[0].locations[0].split("")[1]))); 
        spl1CoordBottom = ((parseInt(this.ships[0].locations[0].split("")[0])) + 1) + "" + ((parseInt(this.ships[0].locations[0].split("")[1]))); 
		spl2CoordLeft = ((this.ships[0].locations[1].split("")[0])) + "" + ((this.ships[0].locations[1].split("")[1] - 1)); 
		spl2CoordRight = ((this.ships[0].locations[1].split("")[0])) + "" + ((parseInt(this.ships[0].locations[1].split("")[1]) + 1)); 
        spl2CoordTop = ((parseInt(this.ships[0].locations[1].split("")[0])) - 1) + "" + ((parseInt(this.ships[0].locations[1].split("")[1]))); 
        spl2CoordBottom = ((parseInt(this.ships[0].locations[1].split("")[0])) + 1) + "" + ((parseInt(this.ships[0].locations[1].split("")[1]))); 
		spl3CoordLeft = ((this.ships[0].locations[2].split("")[0])) + "" + ((this.ships[0].locations[2].split("")[1] - 1)); 
		spl3CoordRight = ((this.ships[0].locations[2].split("")[0])) + "" + ((parseInt(this.ships[0].locations[2].split("")[1]) + 1)); 
        spl3CoordTop = ((parseInt(this.ships[0].locations[2].split("")[0])) - 1) + "" + ((parseInt(this.ships[0].locations[2].split("")[1]))); 
		spl3CoordBottom = ((parseInt(this.ships[0].locations[2].split("")[0])) + 1) + "" + ((parseInt(this.ships[0].locations[2].split("")[1])));
	
		this.borderTable1.push(spl1CoordLeft, spl1CoordRight, spl1CoordTop, spl1CoordBottom, spl2CoordLeft, spl2CoordRight, spl2CoordTop, spl2CoordBottom, spl3CoordLeft, spl3CoordRight, spl3CoordTop, spl3CoordBottom);
},

borderTableFiller2: function () {

	let spl4CoordTop;
		let spl4CoordLeft;
		let spl4CoordRight;
		let spl4CoordBottom;
		let spl5CoordTop;
		let spl5CoordLeft;
		let spl5CoordRight;
		let spl5CoordBottom;
		let spl6CoordTop;
		let spl6CoordLeft;
		let spl6CoordRight;
		let spl6CoordBottom;


	spl4CoordLeft = ((this.ships[1].locations[0].split("")[0])) + "" + ((this.ships[1].locations[0].split("")[1] - 1)); 
		spl4CoordRight = ((this.ships[1].locations[0].split("")[0])) + "" + ((parseInt(this.ships[1].locations[0].split("")[1]) + 1)); 
        spl4CoordTop = ((parseInt(this.ships[1].locations[0].split("")[0])) - 1) + "" + ((parseInt(this.ships[1].locations[0].split("")[1])));
        spl4CoordBottom = ((parseInt(this.ships[1].locations[0].split("")[0])) + 1) + "" + ((parseInt(this.ships[1].locations[0].split("")[1]))); 
		spl5CoordLeft = ((this.ships[1].locations[1].split("")[0])) + "" + ((this.ships[1].locations[1].split("")[1] - 1)); 
		spl5CoordRight = ((this.ships[1].locations[1].split("")[0])) + "" + ((parseInt(this.ships[1].locations[1].split("")[1]) + 1)); 
        spl5CoordTop = ((parseInt(this.ships[1].locations[1].split("")[0])) - 1) + "" + ((parseInt(this.ships[1].locations[1].split("")[1]))); 
        spl5CoordBottom = ((parseInt(this.ships[1].locations[1].split("")[0])) + 1) + "" + ((parseInt(this.ships[1].locations[1].split("")[1]))); 
		spl6CoordLeft = ((this.ships[1].locations[2].split("")[0])) + "" + ((this.ships[1].locations[2].split("")[1] - 1)); 
		spl6CoordRight = ((this.ships[1].locations[2].split("")[0])) + "" + ((parseInt(this.ships[1].locations[2].split("")[1]) + 1)); 
        spl6CoordTop = ((parseInt(this.ships[1].locations[2].split("")[0])) - 1) + "" + ((parseInt(this.ships[1].locations[2].split("")[1]))); 
		spl6CoordBottom = ((parseInt(this.ships[1].locations[2].split("")[0])) + 1) + "" + ((parseInt(this.ships[1].locations[2].split("")[1])));

	this.borderTable1.push(spl4CoordLeft, spl4CoordRight, spl4CoordTop, spl4CoordBottom, spl5CoordLeft, spl5CoordRight, spl5CoordTop, spl5CoordBottom, spl6CoordLeft, spl6CoordRight, spl6CoordTop, spl6CoordBottom);
},
	generateShip: function() { // generating ship location table
		var direction = Math.floor(Math.random() * 4);
		var row, col; 

		if (direction === 0) { // Horizontal
			row = Math.floor(Math.random() * this.boardSize); 
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength)); 
		} else if (direction === 1) { // Vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		} else if (direction === 2) { // position \
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else if (direction === 3) { // position /
			row = Math.floor(Math.random() * 5);
			col = Math.floor(Math.random() * (2 - 6) + 6);
		}
		

		var newShipLocations = [];

		for (var i = 0; i < this.shipLength; i++) { 
			if (direction === 0) { // ship position horizontal
				newShipLocations.push(row + "" + (col + i)); // ship position vertical
			} else if (direction === 1) {
				newShipLocations.push((row + i) + "" + col);
			} else if (direction === 2) { // ship position "\"
				newShipLocations.push((row + i) + "" + (col + i));
			} else if (direction === 3) { // ship position "/"
				newShipLocations.push((row + i) + "" + (col - i));
			}
		}
		return newShipLocations;
	},

	collision: function(locations) { // check for collision with previous ship
				if (this.ships[1].locations.some(k => this.ships[0].locations.includes(k)) || (this.ships[1].locations.some(o => this.borderTable1.includes(o)))) {
					return true;
				} return false;
			}, 
			collision2: function(locations) { 
				if (this.ships[2].locations.some(k => this.ships[0].locations.includes(k)) || (this.ships[2].locations.some(o => this.ships[1].locations.includes(o))) || (this.ships[2].locations.some(k => this.borderTable1.includes(k))) ) {
					return true;
				} return false;
			}, 
		
	borderTable: function () {
		return ships;
	},


	}; // Model END

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) { 
        let correctOne = unParseGuess(location)
		var cell = document.getElementById(correctOne);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
        let correctOne = unParseGuess(location)
		var cell = document.getElementById(correctOne);
		cell.setAttribute("class", "miss");
	}

};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = (guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
               view.displayMessage("Zatopiłeś wszystkie okręty, w " +
                        this.guesses + " próbach.");
						
			}
		}
	}
}

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Ups, proszę wpisać literę i cyfrę.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Ups, to nie są współrzędne!");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Ups, pole poza planszą!");
		} else {
			return row + column;
		}
	}
	return null;
}

function unParseGuess (guess) { // change guess format for ID finding
    let input = (guess);
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    let firstChar = input.charAt(0); // 2
    let secondChar = input.charAt(1);
    let correctChar = alphabet[firstChar];
    
    return correctChar + secondChar;
}

model.generateShipLocations1();

 let resetPage = document.getElementById("resetButton");

 resetPage.onclick = function() {
	 location.reload();
 }

 function getDOMElem (attribute, value) {  // find DOM element by attribute and its value
    return document.querySelector(`[${attribute}= "${value}"]`)
    }   
    
 function mapListToDOMElements (listofValues, attribute) { // map DOM elements to object
        const viewElems = {} 
        for (const value of listofValues) { 
            viewElems[value] = getDOMElem(attribute, value); 
        }
        return viewElems;
    }
    
  function trigger () { // passing clicked element ID to further processing
    let clicked = event.target.id;
    let parsed = parseGuess(clicked);
        controller.processGuess(parsed) 
    }

function connectDOMelems () { // connect DOM elements with id and setup listener
   const listOfIds = Array.from(document.querySelectorAll('[id]')).map(elem => elem.id);
    viewElems = mapListToDOMElements(listOfIds, 'id');
    viewElems.shipsTable.addEventListener('click' , trigger)
}

let viewElems = {}; // container for DOM elements

document.addEventListener('DOMContentloaded', connectDOMelems()); 

