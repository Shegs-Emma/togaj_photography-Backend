const express       = require('express'),
    router          = express.Router(),
    Photo           = require('../models/photo');

const photoCtrl = require('../controllers/photo');


//===================GET A PHOTOGRAPH==================
router.get('/', photoCtrl.fetchPhotos);

//==================POST A PHOTOGRAPH================================
router.post('/', photoCtrl.postPhotos);


module.exports = router;