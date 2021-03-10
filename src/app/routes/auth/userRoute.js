import { Router } from 'express';
import Validator from '../../middlewares/validator';
import UserController from '../../controllers/userController';

const router = Router();

router.post('/auth/signup', Validator.userSignup, UserController.signup );

router.post('/auth/signin', Validator.userSignin, UserController.signin);

export default router;