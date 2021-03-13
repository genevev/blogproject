import { Router } from 'express';
import BlogController from '../../controllers/blogController';
import Validator from '../../middlewares/validator';

const blogRoute = Router();

blogRoute.post('/blog/posts',  Validator.createBlog, BlogController.create );

blogRoute.get('/blog/posts', BlogController.allBlog);

export default blogRoute;