const { Timer } = require('../mainscreen/timer');

const timer = new Timer();

test('checking if timer is working', () => {
    expect(timer).toBeTruthy();
})