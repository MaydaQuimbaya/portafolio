import express from 'express';
import routes from './routes/routes.js';
import bodyParser from 'body-parser';
import path from 'path';
import connectDB from './db/connectDb.js';
const app = express();
const port = process.env.port || 8080 

const DATABASEURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/portfolio';

app.use(bodyParser.urlencoded({extended: false}))

/*app.use(express.urlencoded({ extended: true })); // Procesa datos de formularios
app.use(express.json()); // Opcional, para manejar JSON*/


//database configuracion
connectDB(DATABASEURL)

// setup  for static files 
app.use(express.static(path.join(process.cwd(), 'public')))

// ejs setup
app.set('view engine', 'ejs');
app.set('views', './views')

// Crear ruta
app.use('/', routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`El puerto ${port} ya está en uso. Intenta usar otro puerto.`);
    } else {
      console.error('Error al iniciar el servidor:', err);
    }
  });
  