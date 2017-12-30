var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect',  function () {
  console.log('Disconnected from server');
});

//listening for a new message
socket.on('newMessage', function(message) {
  console.log('There is a newMessage: ', message);
})
