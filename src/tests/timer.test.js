const { Timer } = require('../mainscreen/timer');

const timer = new Timer();

test('checking if timer is working', () => {
    expect(timer).toBeTruthy();
})

test('10s timer ', async () => {
    timer.start({val: 10, time: 'S'}, () => {
        expect(1).toBeTruthy();
    }, () => {
        console.log('H')
    })
})