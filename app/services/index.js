const tutorialModel = require('../database/tutorial.model');
const TutorialModel = require('../models');

class TutorialService {
    async create(tutorial) {
        const tutorial = new tutorialModel({
            title: tutorial.title,
            description: tutorial.description,
            published: tutorial.published || false,
        });

        return TutorialModel.create(tutorial);
    }

    async findAll(query) {
        const { title } = query;
        const condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

        return TutorialModel.findAll(condition);
    }

    async findById(id) {
        return TutorialModel.findById(id);
    }

    async update(req) {
        const id = req.params.id;
        return TutorialModel.update(id, req.body);
    }

    async delete(req) {
        const id = req.params.id;
        return TutorialModel.delete(id);
    }

    async deleteAll() {
        return TutorialModel.deleteAll();
    }

    async findAllPublished() {
        return TutorialModel.findAllPublished();
    }
}

module.exports = TutorialService;