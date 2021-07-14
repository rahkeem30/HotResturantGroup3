// Dependencies
const express = require("express");
const path = require("path")

//Setting up express
const app = express();
const PORT = process.env.PORT || 3000

//Setting up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Reservation Data
const reservations = []

const waitList = []

//Routes
app.get('/', (req,res) => res.sendFile(path.join(__dirname, './html/home.html')));

app.get('/make', (req,res) => res.sendFile(path.join(__dirname, './html/make.html')));

app.get('/view', (req,res) => res.sendFile(path.join(__dirname, './html/view.html')));

app.get('/api/reservations/:reservation', (req,res) => {
	const chosen = req.params.reservation;

	console.log(chosen);

	for(let i=0; i < reservations.length; i++) {
		if(chosen === reservations[i].length) {
			return res.json(reservations[i]);
		}
	}
	return res.json(false);
})



app.post('/api/reservations', (req,res) => {
	const newReservation = req.body;

	console.log(newReservation);
	reservations.push(newReservation);
	res.json(newReservation);
	res.json(reservations);
	if(reservations.length > 4) {
		app.post('/api/waitlist', (req,res) => {
			const newReservation = req.body;
		
			console.log(newReservation);
			waitList.push(newReservation);
			res.json(newReservation);
		})
	}
})

displayArrays = () => {
console.log(reservations);
console.log(waitList);
}

displayArrays();

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));