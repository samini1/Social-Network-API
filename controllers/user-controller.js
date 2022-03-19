const { User } = require('../models');

const userController = {
//get all
    getAllUser(req, res) {
        User.find({})
        .populate({ path: 'Users', select: '-__v' })
        .populate({ path: 'friends', select: '-__v'})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //get by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({ path: 'Users', select: '-__v'})
        .populate({ path: 'friends', select: '-__v'})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }); 
    },
    //create user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    //update user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new:true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    //delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({_id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    createFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: paramas.userId},
            { $push: { friends: body } },
            { new: true }
        )
        .then (dbUserData => {
            if (!dbUserData) {
                res.status (404).json({ message: 'No User found at id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: { friendId: params.friendId } } },
          { new: true }
        )
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      }
};

module.exports = userController