//Comando para establecer la comunicacion o conexion

var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritotio1  = $('#lblEscritorio1');
var lblEscritotio2  = $('#lblEscritorio2');
var lblEscritotio3  = $('#lblEscritorio3');
var lblEscritotio4  = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2,lblTicket3,lblTicket4];
var lblEscritoios = [lblEscritotio1, lblEscritotio2 , lblEscritotio3 , lblEscritotio4 ];

socket.on('estadoActual', function(data){
    actualizaHtml(data.ultimos4);
});

socket.on('ultimos4', function(data){
    console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHtml(data.ultimos4)
})

function actualizaHtml(ultimos4){

    for(var i= 0; i<= ultimos4.length-1 ; i++){
        lblTickets[i].text('Ticket' + ultimos4[i].numero);
        lblEscritoios[i].text('Escritorio' + ultimos4[i].escritorio);
    }

}
