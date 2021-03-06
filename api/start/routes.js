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

Route.get('/', 'HomeController.home')

Route.get('/users', 'UserController.all').middleware('auth')
Route.post('/users', 'UserController.create')

Route.post('/login', 'LoginController.create')
Route.get('/login', 'LoginController.refresh').middleware('auth')
Route.get('/logout', 'LoginController.logout')
