'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

//cart routes
.resources('carts')
// .resources('monsters')
.resources('orders')

// added get
// .post('/monsters', 'monsters#create')
// .get('/monsters', 'monsters#index')
.resources('monsters')




// shut down for now
//admins
// .post('/sign-up', 'admins#signup')
// .post('/sign-in', 'admins#signin')
// .delete('/sign-out/:id', 'admins#signout')
// .patch('/change-password/:id', 'admins#changepw')
// .resources('admins', { only: ['index', 'show'] })




// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

// all routes created
;
