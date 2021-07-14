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
const reservations = [
	{
		name: '',
		phoneNumber: '',
		email: '',
		uniqueId: ''
	},
]

//Routes
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/add', (req,res) => res.sendFile(path.join(__dirname, 'make.html')));

app.get('/view', (req,res) => res.sendFile(path.join(__dirname, 'view.html')));

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

	newReservation.routeName = newReservation.name.replace(/\S+/g, '').toLowerCase();
	console.log(newReservation);
	reservations.push(newReservation);
	res.json(newReservation);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));