const conexion = require("./conexion");

module.exports = {
  createUser: (connection, body, callback) => {
    connection.query('INSERT INTO usuarios SET Usuario = ? , Contraseña = ?',
        [body.Usuario, body.Contraseña], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback(results);
        });
},
getUsuarios: (connection, body, callback)=> {
  connection.query('SELECT * FROM usuarios', (err, results) => {
      if (err) {
          callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
          return;
      }

      callback(results);
  })
  
}
}

