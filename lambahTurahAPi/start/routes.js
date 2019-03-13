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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('api/v1/news', 'NewsController.index' )
Route.post('api/v1/news', 'NewsController.store' )
Route.get('api/v1/news/:id', 'NewsController.details' )
Route.patch('api/v1/news/:id', 'NewsController.update' )
Route.delete('api/v1/news/:id', 'NewsController.destroy' )

Route.get('api/v1/register', 'RegisterController.create' )
Route.post('api/v1/register', 'RegisterController.store' )

// Route.get('api/v1/create', 'LoginController.create' )
Route.post('api/v1/login', 'LoginController.store' )
Route.post('api/v1/logout', 'LoginController.destroy' )

