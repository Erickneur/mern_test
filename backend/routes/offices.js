const router = require('express').Router();
let Office = require('../models/office.model');

router.route('/').get((req, res) => {
    Office.find()
        .then(offices => res.json(offices))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const phone = Number(req.body.phone);
    const location = req.body.location;

    const newOffice = new Office({
        username,
        description,
        phone,
        location,
    });

    newOffice.save()
        .then(() => res.json('Office added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find/:id').get((req, res) => {
    Office.findById(req.params.id)
        .then(office => res.json(office))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    Office.findByIdAndDelete(req.params.id)
        .then(() => res.json('Office deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Office.findById(req.params.id)
        .then(office => {
            office.username = req.body.username;
            office.description = req.body.description;
            office.phone = Number(req.body.phone);
            office.location = req.body.location;

            office.save()
                .then(() => res.json('Office updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;