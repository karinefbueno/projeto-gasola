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

router.get('/repos', [ReposController, 'findAll'])
router.get('/users/:name', [UsersController, 'findUser'])

// router.post('/favotites', [favoriteController, 'findAll'])
// router.get('/favotites', [favoriteController, 'findAll'])
