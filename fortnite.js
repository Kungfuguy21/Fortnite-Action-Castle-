let tiltedStorm = 1
let pleasantStorm = 1
let greasyStorm = 1
let dustyStorm = 1
let retailStorm = 1
let junkStorm = 1
let wailingStorm = 1
let PossibleRotations = 0
let turn_counter = 0
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});



let commands = {
	enter: (location) => {
		fortnite[location]();
	},

	drop: (location) => {
		Storm();
		fortnite[location]();
		turn_counter = turn_counter + 1
	},

	rotate: (location) => {
		Storm();
		fortnite[location]();
		turn_counter = turn_counter + 1
	},

}

// command = input;

fortnite = {

	starting: () => {
		console.log("starting")
		let options = {
			bus: 1,
			tilted: 0,
			pleasant: 0,
			greasy: 0,
			dusty: 0,
			retail: 0,
			junk: 0,
			wailing: 0
		};

		rl.question("You're on the starting island! Enter the Battle Bus to play Fortnite and gain the Victory Royale! (enter bus) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to jump on the bus and were sent back to the lobby!");
			}

		});
	},

	bus: () => {
		let options = {
			bus: 0,
			tilted: 1,
			pleasant: 1,
			greasy: 1,
			dusty: 1,
			retail: 1,
			junk: 1,
			wailing: 1,
		};

		let drops = "";
		for (i in options) {
			if (options[i] == 1) {
				drops = drops + ", " + i;
			}
		}

		rl.question("You're on the Battle Bus! Where we dropping? The options are: " + drops + ". (drop ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to jump out of the Battle Bus and were sent to Junk Junction \n\n");
				commands[drop](junk);
			}
		});


	},

	tilted: () => {
		let options = {
			bus: 0,
			tilted: 0,
			pleasant: pleasantStorm,
			greasy: greasyStorm,
			dusty: dustyStorm,
			retail: 0,
			junk: 0,
			wailing: 0,
		};

		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}
		rl.question("Welcome to Tilted Towers! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!");
			}
		});
	},

	pleasant: () => {
		let options = {
			bus: 0,
			tilted: tiltedStorm,
			pleasant: 0,
			greasy: 0,
			dusty: dustyStorm,
			retail: 0,
			junk: junkStorm,
			wailing: 0,
		};
		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}

		rl.question("Welcome to Pleasant Park! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!")
			}
		});
	},
	greasy: () => {
		let options = {
			bus: 0,
			tilted: tiltedStorm,
			pleasant: 0,
			greasy: 0,
			dusty: 0,
			retail: 0,
			junk: 0,
			wailing: 0,
		};

		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}

		rl.question("Welcome to Greasy Grove! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!");
			}
		});
	},

	dusty: () => {
		let options = {
			bus: 0,
			tilted: tiltedStorm,
			pleasant: 0,
			greasy: 0,
			dusty: 0,
			retail: retailStorm,
			junk: 0,
			wailing: wailingStorm

		};

		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}

		rl.question("Welcome to Dusty Depot! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!");
			}
		});
	},

	retail: () => {
		let options = {
			bus: 0,
			tilted: 0,
			pleasant: 0,
			greasy: 0,
			dusty: dustyStorm,
			retail: 0,
			junk: 0,
			wailing: wailingStorm,
		};
		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}

		rl.question("Welcome to Retail Row! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!");
			}
		});
	},

	junk: () => {
		let options = {
			bus: 0,
			tilted: 0,
			pleasant: pleasantStorm,
			greasy: 0,
			dusty: 0,
			retail: 0,
			junk: 0,
			wailing: 0,
		};
		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}

		rl.question("Welcome to Junk Junction! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!");
			}
		});
	},

	wailing: () => {
		let options = {
			bus: 0,
			tilted: 0,
			pleasant: 0,
			greasy: 0,
			dusty: 0,
			retail: retailStorm,
			junk: 0,
			wailing: 0,
		};
		console.log(weapon());
		PossibleRotations = 0
		let rotations = "";
		for (i in options) {
			if (options[i] == 1) {
				PossibleRotations = PossibleRotations + 1
				rotations = rotations + ", " + i;
			}
		}
		if (PossibleRotations == 0) {
			console.log("You died from the storm!")
			process.exit();
		}
		rl.question("Welcome to Wailing Woods! Where would you like to rotate? The options are: " + rotations + " (rotate ___________) \n\n", (query) => {
			verb = query.split(' ')[0];
			subject = query.split(' ')[1];
			if (options[subject] == 1) {
				commands[verb](subject);
			} else {
				console.log("You forgor to rotate and the storm killed you!");
			}
		});
	}
}

function weapon() {

	let gunbasenumber = Math.round(Math.random());
	let gun = (gunbasenumber * 5)
	if (gun == 0) {
		gun = "pistol";
	}
	if (gun == 1) {
		gun = "shotgun";
	}
	if (gun == 2) {
		gun = "bolt sniper";
	}
	if (gun == 3) {
		gun = "rpg";
	}
	if (gun == 4) {
		gun = "assault rifle";
	}
	if (gun == 5) {
		gun = "submachine gun";
	}
	return (gun);

}

// function rarity() {
// return();

// }

rl.question("\nHi! You are in Fortnite! What skin do you want to play as? \n\n", (skin) => {

	console.log("Welcome to Fortnite, " + skin + "!\n\n");
	fortnite.starting();

});


function Storm() {

	if (turn_counter == 3 && wailingStorm == 1) {
		console.log("The Storm Has Entered A New Location!: Wailing")
		wailingStorm = 0
	}
	if (turn_counter == 4 && dustyStorm == 1) {
		console.log("The Storm Has Entered A New Location!: Dusty")
		dustyStorm = 0
	}
	if (turn_counter == 5 && retailStorm == 1) {
		console.log("The Storm Has Entered A New Location!: Retail")
		retailStorm = 0
	}
	if (turn_counter == 6 && tiltedStorm == 1) {
		console.log("The Storm Has Entered A New Location!: Tilted")
		tiltedStorm = 0
	}
}