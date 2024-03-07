const squares = [
	"Single deck instead of double deck",
	"Driving past you waiting at the stop",
	"Standing room only",
	"Ticket printer jammed",
	"Card reader not working",
	"Broken CCTV display",
	"Smell of weed",
	"Smell of piss",
	"Someone swears at the driver for doing their job",
	"Leaky beer can rolling around",
	"10-year-old vaping at the back",
	"Elaborate driver changeover mid-route",
	"Broken stop-button",
	"Discarded takeaway on floor",
	"Unidentified stain on last seat",
	"'We are being held at this stop to regulate the service'",
	"Mother with pram even though it's 11pm",
	"Driver ignores the stop request",
	"Someone talking to themselves",
	"Loud phone conversation, with gossip",
	"Someone taking 10 minutes to get change/card from bag to pay",
	"Harsh braking for no apparent reason"
]

const backgrounds = [
	"first.jpg",
	"first.webp",
	"london.jpg",
	"london2.jpg",
	"stagecoach.webp",
	"stagecoach2.jpg",
	"travel-west-mids.jpg"
]

document.getElementById("bg").style.backgroundImage = `url('moquettes/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}')`;

function generateBoard(size) {
	document.getElementById("game-board").innerHTML = "";
	const toPick = size * size;
	
	const picked = [];

	document.getElementById("game-board").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	document.getElementById("game-board").style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < toPick; i++) {
		if (i == Math.floor(toPick / 2)) {
			picked.push("<span>LATE</span> (free space)");
			continue;
		}

		const index = Math.floor(Math.random() * squares.length);
		picked.push(squares.splice(index, 1)[0]);
	}

	for (const s of picked) {
		const sqE = document.createElement("div");
		sqE.classList.add("square");
		sqE.innerHTML = `<div>${s}</div>`;
		sqE.onclick = () => { sqE.classList.toggle("selected") };
		document.getElementById("game-board").appendChild(sqE);
	}
}

function closeIntro() {
	document.getElementById('intro').remove();
	localStorage.setItem('intro', 'seen');
}

// if (localStorage.getItem('intro') === 'seen') {
// 	document.getElementById('intro').remove();
// }

generateBoard(3);