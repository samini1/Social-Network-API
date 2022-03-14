const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

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

