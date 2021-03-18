import { Router } from 'express';
import BlogController from '../../controllers/blogController';
import Validator from '../../middlewares/validator';

const blogRoute = Router();

blogRoute.post('/blog/posts',  Validator.createBlog, BlogController.create );
blogRoute.get('/blog/posts', BlogController.allBlog);
blogRoute.get('/blog/posts/:post_id', BlogController.getOneBlog);
blogRoute.put('/blog/posts/:post_id', BlogController.updateBlog);

export default blogRoute;