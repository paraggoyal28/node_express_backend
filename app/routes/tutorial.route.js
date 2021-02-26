import TutorialController from '../controllers/index.js';
import express from 'express';
const router = express.Router();
const route = (app) => {
    const tutorialController = new TutorialController();
    // Create a new Tutorial
    router.post('/', tutorialController.create);

    // Retrieve all tutorials
    router.get('/', tutorialController.findAll);

    //Retrieve all published tutorials
    router.get('/published', tutorialController.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get('/:id', tutorialController.findById);

    // Update a Tutorial with id
    router.put('/:id', tutorialController.update);

    // Delete a Tutorial with id
    router.delete('/:id', tutorialController.deleteById);

    // Delete all Tutorials
    router.delete('/', tutorialController.deleteAll);

    app.use('/api/tutorials', router);
};

export default route;