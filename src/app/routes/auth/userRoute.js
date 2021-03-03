import { Router } from 'express';
import Validator from '../../middlewares/validator';

import UserController from '../../controllers/userController';

const router = Router();

router.param('username', function(req, res, next, username) {
    if(username.match(/([a-z]+)/) !== null)
      next();
    else
      next(err);
  });

router.post('/auth/signup', Validator.userSignup, UserController.signup );

router.post('/auth/signin', Validator.usersignin, UserController.signin);

export default router;