var express = require('express') //llamamos a Express
var app = express()               
var cors = require('cors')
var port = process.env.PORT || 5050  // establecemos nuestro puerto
require("dotenv");
const datosSchema = require("./models/datos");
const mongoose = require("mongoose");
app.use(express.json)
app.use(cors());
app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})
app.post('/guardar',(req,res)=>{
  const datos = userSchema(req.body);
  user.save().then(data=>res.json(data));
});
/*mongoose.connect("mongodb+srv://edgar:MONGOPASS@cluster0.lkyswoc.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>console.log("conectado a bd"))*/

app.listen(port)
console.log('API escuchando en el puerto ' + port)