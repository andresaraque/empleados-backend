require('dotenv').config();
const cors = require('cors');
const express = require('express');

const { dbConnection } = require('./database/config');

const app = express();

app.use(express.json()); //Sin usar body parser

// Habilitar cors (por ahora todos los dominios)
app.use(cors());

app.use(express.urlencoded({extended: false})); // desde formulario HTML

//Base de Datos
dbConnection();


// Rutas
app.use('/api/empleados', require('./routes/empleados'));



app.listen(process.env.PORT, () => {
    console.log('Servidor en PORT: ' + process.env.PORT);
});
