import { name } from "ejs";
import UserModel from "../model/userModel.js";

// Valores predeterminados para la página
const defaultValues = (extras = {}) => ({
    pageTitle: 'Portfolio - Alejandro Rodríguez Ortega',
    metaDescription: 'Currículum profesional y proyectos destacados de Alejandro Rodríguez Ortega.',
    metaKeywords: 'Portfolio, Alejandro Rodríguez Ortega, Desarrollo de Aplicaciones, Kotlin, JavaScript, Python, PHP',
    userName: 'Alejandro Rodríguez Ortega',
    aboutText: 'Estudiante responsable y flexible, con habilidades para trabajar en equipo y un alto nivel de inglés certificado (B2), buscando desarrollar nuevas habilidades y adquirir conocimientos útiles para su carrera profesional.',
    userTitle: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    userDescription: 'Experiencia en el desarrollo de páginas web, bases de datos, y aplicaciones de gestión en tecnologías como HTML, JavaScript, Kotlin y más.',
    contactDescription: 'Puedes contactarme a través de las siguientes opciones:',
  currentYear: new Date().getFullYear(),
  name: '',
  email: '',
  subject: '',
  message: '',
  ...extras
});
const homeController = async (req, res) => {
  try {
    //console.log(req.body);
    

    // Renderiza con valores predeterminados
    res.render('index', defaultValues());
  } catch (error) {
    console.log(error.message);
  }
};




// User Contact Controller
const ContactUserController = async (req, res) => {
  try {
    const data = await UserModel({
      name: req.body.name,
      email:  req.body.email,
      subject:  req.body.subject,
      message:  req.body.message,
    });

    if (data) {
      await data.save();
      console.log("User saved successfully");
    }
   // console.log(req.body);
    // Renderiza con valores predeterminados
    res.render('index', defaultValues());
  } catch (error) {
    console.log(error.message);
  }
};

export { homeController, ContactUserController };




/*// Página de inicio
const homeController = async (req, res) => {
  try {
    res.render('index', defaultValues());
  } catch (error) {
    console.error('Error en el controlador de inicio:', error.message);
    res.status(500).send('Ocurrió un error al cargar la página de inicio.');
  }
};*/




// Controlador de formulario de contacto
/*const ContactUserController = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validaciones básicas
    if (!name || !email || !subject || !message) {
      return res.render('index', defaultValues({
        errorMessage: 'Por favor, completa todos los campos.',
        name, email, subject, message
      }));
    }

    const user = new UserModel({ name, email, subject, message });
    await user.save();
    console.log("Usuario guardado correctamente");

    res.render('index', defaultValues({ successMessage: 'Mensaje enviado con éxito' }));
  } catch (error) {
    console.error('Error al guardar el usuario:', error.message);
    res.render('index', defaultValues({
      errorMessage: 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.',
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    }));
  }
};*/


