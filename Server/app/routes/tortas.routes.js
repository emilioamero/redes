module.exports = app => {
    const tortas = require("../controllers/tortas.controller.js");
  
  
    app.get("/tortas", tortas.findAll);
  

  };