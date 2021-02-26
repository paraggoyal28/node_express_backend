import TutorialModel from '../models/index.js';
const tutorialModel = new TutorialModel();
class TutorialService {
    async create(tutorial) {
        const newTutorial = {
            title: tutorial.title,
            description: tutorial.description,
            published: tutorial.published || false,
        };

        return tutorialModel.create(newTutorial);
    }

    async findAll(title) {
        let newTitle = ""
        for (const letter of title) {
            newTitle += letter == '"' ? '' : letter;
        }
        const condition = newTitle ? { title: { $regex: new RegExp(newTitle), $options: "i" } } : {};
        return tutorialModel.findAll(condition);
    }

    async findById(id) {
        return tutorialModel.findById(id);
    }

    async update(id, body) {
        return tutorialModel.update(id, body);
    }

    async delete(id) {
        return tutorialModel.delete(id);
    }

    async deleteAll() {
        return tutorialModel.deleteAll();
    }

    async findAllPublished() {
        return tutorialModel.findAllPublished();
    }
}

export default TutorialService;