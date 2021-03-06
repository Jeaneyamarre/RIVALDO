const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
    const thing = new Thing({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        nombre_de_clicks: req.body.nombre_de_clicks,
        userId: req.body.userId
    });
    thing.save().then(
        () => {
            res.status(201).json({
                message: 'Playlist Sauvegard√©!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error+"post"
            });
        }
    );
};

exports.getOneThing = (req, res, next) => {
    Thing.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            res.status(200).json(thing);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyThing = (req, res, next) => {
    const thing = new Thing({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        nombre_de_clicks: req.body.nombre_de_clicks,
        userId: req.body.userId
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error+"put"
            });
        }
    );
};

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllStuff = (req, res, next) => {
    Thing.find().then(
        (things) => {
            res.status(200).json(things);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
