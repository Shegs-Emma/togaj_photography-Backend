const Photo = require('../models/photo');

exports.fetchPhotos = (req, res) => {
    Photo.find().then(
        (photos) => {
            res.status(200).json(photos);
        }
    ).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.postPhotos = (req, res, next) => {
    const photo = new Photo({
        photoUrl: req.body.photoDetails.photoUrl,
        imageCategory: req.body.photoDetails.imageCategory
    });

    photo.save().then(() => {
        res.status(201).json({
            message: 'Photo added successfully!'
        });
    }).catch(error => {
        res.status(400).json({
            error: error
        });
    });
}