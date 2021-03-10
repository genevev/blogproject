import BlogService from '../../database/services/blogService';
import Jwt from '../middlewares/jwt';
import GenericRes from '../helpers/response';
import ExtractToken from '../helpers/extractToken';

class BlogController { 

    static async create(req, res, next) { 
    
        try { 

            const userId = await ExtractToken.authentication( req, res, next);

            const { title, description } = req.body;
        
            const blogModel = { 
                userId, 
                title, 
                description 
            };
            const newBlog = await BlogService.createBlog(blogModel);
            const blogId = await BlogService.getOneBlog(title);
            const {id, createdAt } = blogId;

            if(!newBlog) { 
                GenericRes.error(res, 405, 'There is no blog yet');                
            }
            GenericRes.success(res, 201, { id, ...blogModel, createdAt }); 
        } catch (error) { 
            GenericRes.error(res, 406, error.message);
        }
    }
}

export default BlogController;