const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))


//Routes
app.use(require('./routes/users.routes'));



//Server start
app.listen(app.get('port'), () => {
    console.log('Server on port 3000'.rainbow);
});