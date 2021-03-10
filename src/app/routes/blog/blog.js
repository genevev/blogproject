import { Router } from 'express';
import BlogController from '../../controllers/blogController';
import Validator from '../../middlewares/validator';

const blogRoute = Router();

blogRoute.post('/blog/posts',  Validator.createBlog, BlogController.create );

export default blogRoute;