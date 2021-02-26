import TutorialService from '../services/index.js';
const tutorialService = new TutorialService();

class TutorialController {
    async create(req, res) {
        // validate request
        if (!req.body.title) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }

        return tutorialService.create(req.body).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the Tutorial."
            });
        });
    }

    async findAll(req, res) {
        const { title } = req.query;
        return tutorialService.findAll(title).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({ message: err.message || "Some error occured while retrieving tutorials." });
        });
    }

    async findById(req, res) {
        const id = req.params.id;
        return tutorialService.findById(id).then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found Tutorial with id= " + id });
            } else {
                res.send(data);
            }
        }).catch(err => {
            res.status(500).send({ message: "Error retrieving Tutorial with id= " + id });
        });
    }

    async update(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }
        const id = req.params.id;
        const body = req.body;
        return tutorialService.update(id, body).then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({ message: "Tutorial was updated successfully." });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id = " + id
            });
        });
    }

    async deleteById(req, res) {
        const id = req.params.id;
        return tutorialService.delete(id).then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id = ${id}.Maybe Tutorial doesnot exists`,
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
    }

    async deleteAll(req, res) {
        return tutorialService.deleteAll().then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while removing all the tutorials."
            });
        });
    };

    async findAllPublished(req, res) {
        return tutorialService.findAllPublished().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving tutorials."
            });
        });
    };

}

export default TutorialController;
