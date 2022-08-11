const mongoose = require("mongoose");
const datosSchema =mongoose.Schema({
    sensor:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    date:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('datos',datosSchema);