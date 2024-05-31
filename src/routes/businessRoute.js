import express from 'express';
import { BusinessController } from '../controllers/businessController.js';

const router = express.Router();

// Define routes
router.get('/getAllBusinessData', BusinessController.getAllBusinessData);
router.get('/profile/:id', BusinessController.getBusinessDataById);

export default router;