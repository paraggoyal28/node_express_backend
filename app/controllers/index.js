const TutorialService = require('../services');

class TutorialController {
    async create(req, res) {
        // validate request
        if (!req.body.title) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }

        return TutorialService.create(req.body).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the Tutorial."
            });
        });
    }

    async findAll(req, res) {
        return TutorialService.findAll(req.query).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({ message: err.message || "Some error occured while retrieving tutorials." });
        });
    }
}
