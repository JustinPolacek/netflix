const express = require('express');
const app = express();
const controller = require('./controller');

console.log(controller)

app.use(express.json());


// movies controller
app.get('/api/movies', controller.getMovies);
app.delete('/api/movies/:index', controller.deleteMovie)



const port = 5050
app.listen(port, () => console.log(`Server rocking out on ${port}`));