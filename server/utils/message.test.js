var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {

    var msg = generateMessage('jeff', 'hi');
    expect(msg.from).toBe('jeff');
    expect(msg.text).toBe('hi');
    expect(msg.createdAt).toBeA("number");
  });
});
