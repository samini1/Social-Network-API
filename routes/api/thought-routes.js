const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

//all route

router
    .get()

//thought by id

router
    .get()
    .post()
    .put()
    .delete()

//reactions

