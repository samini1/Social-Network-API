const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    removeReaction,
    createReaction
} = require('../../controllers/thought-controller');

//all route and post

router
.get(getAllThought)
.post(createThought);
//thought by id

router
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

//reactions
router
.route('/thoughtId/reactions/:reactionId')
.post(createReaction)
.delete(removeReaction);

module.exports = router;