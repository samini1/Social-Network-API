const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    removeFriend
} = require('../../controllers/user-controller');

//get all and post user routes
router
.route('/')    
.get(getAllUser)
.post(createUser);

//get by id, put, delete
router
.route('/:id')
.get(getUserById)    
.put(updateUser)
.delete(deleteUser);

router
.route('/userId/friends/:friendId')
.post(createFriend)
.delete(removeFriend);

//bonus remobe user's associated thoughts

module.exports = router;