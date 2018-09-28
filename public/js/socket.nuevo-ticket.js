//Comando para establecer la comunicacion o conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});


socket.on('disconnect', function(){
    console.log('Desconectado al servidor');
});

socket.on('estadoActual', function(ticket){
    console.log(ticket);
    label.text(ticket.actual);
});



$('button').on('click', function(){


    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });


});


