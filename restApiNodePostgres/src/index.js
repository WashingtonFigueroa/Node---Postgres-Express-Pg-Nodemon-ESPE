const express =  require ('express');
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded());
//routes
app.use(require('./router/index'));
app.listen(3000);
console.log('Servidor corriendo por el puerto 3000');
