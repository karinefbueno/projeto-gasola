/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ReposController = () => import('#controllers/repos_controller')
const UsersController = () => import('#controllers/users_controller')
const FavoriteController = () => import('#controllers/favorites_controller')

router.get('/repos', [ReposController, 'findAll'])
router.get('/users/:name', [UsersController, 'findUser'])

router.post('/favorite', [FavoriteController, 'createFavorite'])
router.get('/favorite', [FavoriteController, 'findAll'])
router.delete('/favorite/:id', [FavoriteController, 'deleteFavorite'])
