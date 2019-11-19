const express = require('express');
const path = require ('path')
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'index.html'))

});

var server = app.listen(3000,
    function(){
     console.log('Server Is Ready!--> localhost:3000')   
    });