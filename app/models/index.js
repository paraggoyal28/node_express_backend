import db from "../database/index.js";
const { tutorials } = db;
console.log(tutorials);
class TutorialModel {
    async create(tutorial) {
        const newTutorial = new tutorials(tutorial);
        return newTutorial.save(newTutorial);
    }

    async findAll(condition) {
        return tutorials.find(condition);
    }

    async findById(id) {
        return tutorials.findById(id);
    }

    async update(id, body) {
        return tutorials.findByIdAndUpdate(id, body, { useFindAndModify: false });
    }

    async delete(id) {
        return tutorials.findByIdAndRemove(id);
    }

    async deleteAll() {
        return tutorials.deleteMany({});
    }

    async findAllPublished() {
        return tutorials.find({ published: true });
    }
}

export default TutorialModel;