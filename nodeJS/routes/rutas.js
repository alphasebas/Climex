const express = require('express');
const user = require('../user.model');
const sebas = require("../conexion2");
const ruben = require("../conexion");
const { body, param, validationResult } = require('express-validator');
var router = express.Router();

var conectado;

  ruben.connect((err, res) => {
    if(err){
      sebas.connect((err2, res) => {
        if(err2){
            console.log(err);
            console.log('Error de conexion con sql');
        }
        console.log('conexion exitosa a la base de datos sebas');
        conectado ="sebas";
      });
    }else{
      console.log('conexion exitosa a la base de datos ruben');
      conectado = "ruben";
    }
 });



 router.get('/usuarios', (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) })
      return;
  }
  let body = req.body;
  if(conectado=="sebas"){
    user.getUsuarios(sebas, body, (data => {
      res.json(data);
  }))
  }else if(conectado=="ruben"){
    user.getUsuarios(ruben, body, (data => {
      res.json(data);
  }))
  }

});
router.post('/createuser', [
  body('Usuario').not().isEmpty().isString(),
  body('Contraseña').not().isEmpty().isString()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) })
      return
  }
  let body = req.body;
  if(conectado=="sebas"){
    user.createUser(sebas, body, (data => {
      res.json(data);
  }))
  }else if(conectado=="ruben"){
    user.createUser(ruben, body, (data => {
      res.json(data);
  }))
  }
});
module.exports = router;
