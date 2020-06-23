const sql = require("./db.js");


// constructor
const Tortas = function(tortas) {
  this.id = tortas.id;
  this.nombre = tortas.nombre
};

Tortas.getAll = result => {
    sql.query("SELECT * FROM tortas order by nombre", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Tortas: ", res);
      result(null, res);
    });
  };
  






module.exports = Tortas;
