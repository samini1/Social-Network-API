const res = require('express/lib/response');
const { Thought } = require('../models');

const thoughtController = {
    getAllThought(req, res) {
        Thought.find({})
        .populate({ path: 'reactions', select: '-__v'})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //get by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .populate({ path: 'reactions', select: '-__v'})
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }); 
    },
     //create thought
     createThought({ body }, res) {
        Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(400).json(err));
    },
    //update Thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new:true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No Thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    //delete Thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({_id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No Thought found with this id'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));

    },
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: paramas.thoughtId},
            { $push: { reactions: body } },
            { new: true }
        )
        .then (dbThoughtData => {
            if (!dbThoughtData) {
                res.status (404).json({ message: 'No thought found at id'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => res.json(err));
      }
};



module.exports = thoughtController