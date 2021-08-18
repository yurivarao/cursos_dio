// Promises

// Status:
// Pending
// Fulfilled
// Rejected

const doSomethingPromise = new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    throw new Error('Something went wrong');
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});
console.log(doSomethingPromise);
doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Promises encadeadas
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));

// Promises concorrentes - executas ao mesmo tempo
Promise.all([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
    })
    .catch(err => {
        console.log(err);
    });

// Promises executadas em ordem de termino
Promise.race([doOtherThingPromise(), doOtherThingPromise()])
    .then(data => {console.log(data);
});

// Fetch
fetch('http:localhost:8080/data.json', {
    method: 'post',
    body: {}
})
    .then(responseStream => {
        if(responseStream.status == 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });

// ES7 - Async / Await
const assyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

// EventEmitter
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();
users.console('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Celso Henrique' });
users.userLogged({ user: 'Vicente Rodrigues' });