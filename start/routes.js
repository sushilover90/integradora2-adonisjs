'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// user routes
Route.post('/user/register','UserController.register')
Route.post('/user/login','UserController.logIn')

// verify token route
Route.get('/token/verify','AuthController.verify').middleware(['auth'])
Route.get('/token/getlectures','RegisterController.getLectures')
