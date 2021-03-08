import { Router } from 'express';
import BlogController from '../../controllers/blogcontroller';
import Validator from '../../middlewares/validator';

const blogRoute = Router();

blogRoute.post('/blog/posts', function(req, res) { Validator.createBlog, BlogController.createBlog} );

export default blogRoute;