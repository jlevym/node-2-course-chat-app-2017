var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
 //send a new email
  socket.emit('createEmail', {
    to: 'roy@example.com',
    text: 'hey, this is Jeff - the client in index.js'
  });

});

socket.on('disconnect',  function () {
  console.log('Disconnected from server');
});

//listening for a new email
socket.on('newEmail', function(email) {
  console.log('New email', email);
})
