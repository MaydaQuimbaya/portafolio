import express from 'express';
import { homeController, ContactUserController } from '../controllers/homeController.js';
const routes = express.Router();


routes.get('/', homeController);
routes.post('/', ContactUserController);

routes.get('/person2Portfolio', (req, res) => {
  try {
    res.render('person2Portfolio', defaultValues({
      pageTitle: 'Portafolio de Persona 2',
      userName: 'Nombre de Persona 2',
      aboutText: 'Información sobre Persona 2.',
      metaDescription: 'Portafolio profesional de Persona 2.',
      metaKeywords: 'Portafolio, Persona 2, Desarrollo Web, Proyectos'
    }));
  } catch (error) {
    console.error('Error al cargar el portafolio de Persona 2:', error.message);
    res.status(500).send('Ocurrió un error al cargar el portafolio.');
  }
});





// Ruta para la página de inicio
/*routes.get('/', (req, res) => {
  try {
    homeController(req, res);
  } catch (error) {
    console.error('Error en la ruta de inicio:', error);
    res.status(500).send('Ocurrió un error al cargar la página de inicio.');
  }
});

// Ruta para manejar el formulario de contacto
routes.post('/', (req, res) => {
  try {
    ContactUserController(req, res);
  } catch (error) {
    console.error('Error al manejar el formulario de contacto:', error);
    res.status(500).send('Ocurrió un error al enviar el formulario de contacto.');
  }
});*/



export default routes;
