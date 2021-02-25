const db = require("../database");

class TutorialModel {
    async create(tutorial) {
        return db.tutorials.save(tutorial);
    }

    async findAll(condition) {
        return db.tutorials.find(condition);
    }

    async findById(id) {
        return db.tutorials.findById(id);
    }

    async update(id, body) {
        return db.tutorials.findByIdAndUpdate(id, body, { useFindAndModify: false });
    }

    async delete(id) {
        return db.tutorials.findByIdAndRemove(id);
    }

    async deleteAll() {
        return db.tutorials.deleteMany({});
    }

    async findAllPublished() {
        return db.tutorials.find({ published: true });
    }
}

module.exports = TutorialModel;