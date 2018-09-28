//Comando para establecer la comunicacion o conexion

var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
let label = $('small');

console.log(escritorio);
$('h1').text('Escritotio '+ escritorio);

$('button').on('click', function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
        if(resp === 'No hay tickets'){
            label.text('Ticket '+ resp);
            //alert(resp);
            return;
        }
        label.text('Ticket '+ resp.numero);
    })
})