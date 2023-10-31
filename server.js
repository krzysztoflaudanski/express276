const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const testimonialsRouter = require('./routes/testimonials.routes'); // Importuj router
const concertsRouter = require('./routes/concerts.routes');
const seatsRouter = require('./routes/seats.routes');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/testimonials', testimonialsRouter); // add post routes to server
app.use('/api/concerts', concertsRouter);
app.use('/api/seats', seatsRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found...' });
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});