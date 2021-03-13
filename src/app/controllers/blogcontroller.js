import BlogService from '../../database/services/BlogService';
import Jwt from '../middlewares/jwt';
import GenericRes from '../helpers/response';
import ExtractToken from '../helpers/extractToken';
import UserService from '../../database/services/userService';

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

       static async allBlog(req, res, next) {
        try {
         const userId = await ExtractToken.authentication(req, res, next);
         const userData = await UserService.getUserById(userId);
         const data = await BlogService.getAllBlog(userId);

         const { username } = userData;

           if (!data) {
            GenericRes.error(res, 404, 'no blog');
          } 

           GenericRes.success(res, 200, {username, data} );
          
        } catch (error) {
          GenericRes.error(res, 400, error.message);
        } 
      } 
 }

 export default BlogController;