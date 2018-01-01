var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect',  function () {
  console.log('Disconnected from server');
});

//listening for a new message from other users
socket.on('newMessage', function (message) {
  console.log('There is a newMessage: ', message);
  var li = jQuery('<li></li');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

//listener for newLocationMessage and add to dom list as link
socket.on('newLocationMessage', function (message) {
  console.log('newLocationMessge', message);
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank" >My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

// add listener to the form to get e (event)
jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  var messageTextbox =  jQuery('[name=message]');
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('');
  });
});

// add a click listener for geolocation button
var locationButton = jQuery('#send-location');

locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');
  
  navigator.geolocation.getCurrentPosition(function(position) {
    locationButton.removeAttr('disabled').text('Send location');
    console.log(position.coords.latitude, position.coords.longitude);
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
}, function () {
  locationButton.removeAttr('disabled').text('Send location');
  alert('Unable to fetch location');
  });
});
