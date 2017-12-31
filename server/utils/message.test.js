var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {

    var msg = generateMessage('jeff', 'hi');
    expect(msg.from).toBe('jeff');
    expect(msg.text).toBe('hi');
    expect(msg.createdAt).toBeA("number");
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'jeff';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1'

    var locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage).toInclude({from, url})
    expect(locationMessage.createdAt).toBeA('number');
  });
});
