const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

//get all and post user routes
router
    .route('/')    
    .get()
    .post

//get by id, put, delete
router
    .route('/:id')
    .get()    
    .put()
    .delete()

//bonus remobe user's associated thoughts

module.exports = router;