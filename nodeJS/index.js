const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

 const app = express();
 const rutas=require('./routes/rutas');
 app.use(cors());
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
 app.use('/',rutas);


 app.listen(3000,(err,res)=> {
     if(err){
         console.log('Error al levantar servidor')
         return;
        }
        console.log('Apis escuchando en el puerto 3000')
    })



