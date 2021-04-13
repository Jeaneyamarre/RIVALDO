const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
const Thing = require('../models/thing');



/* GET*/
router.get('/:id', (req, res, next) => {
    Thing.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            res.status(200).json(thing);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error+"get"
            });
        }
    );
});
/* INSERT/POST*/
router.post('/', stuffCtrl.createThing);

/* UPDATE*/
router.put('/:id', (req, res, next) => {
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
});

/* DELETE*/
router.delete('/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error+"delete"
            });
        }
    );
});

router.get('/' +
    '', (req, res, next) => {
    Thing.find().then(
        (things) => {
            res.status(200).json(things);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error+"redirect"
            });
        }
    );
});

module.exports = router;
