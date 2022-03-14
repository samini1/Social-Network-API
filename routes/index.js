const router = require('express').Router();
//import all api routes
const apiRoutes = require('./api');

router .use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('Error!');
});

module.exports = router;