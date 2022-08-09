const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
var LAST_HUM = 50;
var LAST_TEMP = 17.5;

const TEMP_LIMITS = [10, 25];
const HUM_LIMITS = [30, 70];

io.on('connection',(socket)=>{
    console.log("socket connected", socket.id);
})

server.listen(5000,()=>{
    console.log('Socket listo en el puerto 5000');
})


function getDataAndSend() {
    socket.emit('iot/sensors', {
        sensor: "HUM",
        value: generateData("HUM")
    });
    socket.emit('iot/sensors', {
        sensor: "TEMP",
        value: generateData("TEMP")
    });
}
function generateData(type) {
    var sig = Math.random() > .5 ? 1 : -1;
    var value = sig * parseFloat(Math.random().toFixed(1));
    if (type == "TEMP") {
        if (LAST_TEMP + value >= TEMP_LIMITS[0] && LAST_TEMP + value <= TEMP_LIMITS[1]) LAST_TEMP += value;
        else LAST_TEMP -= value;
        return LAST_TEMP;
    }
    if (type == "HUM") {
        if (LAST_HUM + value >= HUM_LIMITS[0] && LAST_HUM + value <= HUM_LIMITS[1]) LAST_HUM += value;
        else LAST_HUM -= value;
        return LAST_HUM;
    }
    return 0;
}