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

            const checkExist= await BlogService.getOneBlogByTitle(title);
            const data = await BlogService.createBlog(blogModel);

            if(checkExist){
              GenericRes.error(res, 401, 'already Exist');
            }
            
            if(!data) { 
              GenericRes.error(res, 405, 'There is no blog yet');                
            }

           delete data['updatedAt'];

            GenericRes.success(res, 201, data); 
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
      
      static async getOneBlog(req, res, next) { 
        try { 
         const userId = await ExtractToken.authentication(req, res, next);
         const blogId = req.params.post_id;
         const userData = await UserService.getUserById(userId);
        const data = await BlogService.getSingleBlog(blogId,  userId);

         const { username } = userData;

         
         if (!data) { 
           GenericRes.error(res, 400, 'no blog found');
         }
          GenericRes.success(res, 200, {data, username});
      } catch (error) { 
          GenericRes.error(res, 404, error.message);
        } 
      }

      static async updateBlog(req, res, next) { 
        try { 
          const userId = await ExtractToken.authentication(req, res, next);
          const blogId = req.params.post_id;
          const { title, description } = req.body;
          const blogModel = { title, description };

          const data = await BlogService.updateBlog(blogModel, blogId);
         if (!data) { 
           GenericRes.error(res, 400, 'no blog');
         }
        
         if (data) {
           const newData = await BlogService.getOneBlog(blogId);
           GenericRes.success(res, 200, newData);
        }
      } catch(error) { 
        GenericRes.error(res, 404, error.message);
      }
}

static async deleteBlog(req, res, next) { 
  try { 
    const userId = await ExtractToken.authentication(req, res, next);
    const blogId = req.params.post_id;
    const { title, description } = req.body;
    const blogModel = { title, description};

    const data = await BlogService.deleteBlog(blogId);

    if (!data) { 
      GenericRes.error(res, 400, 'blog no deleted');
    }

    if (data) { 
      const newData = await BlogService.getOneBlog(blogId);
      GenericRes.success(res, 200,{blogId, userId, blogModel} );
    }

  } catch(error) { 
    GenericRes.error(res, 404, error.message);
  }
}
}
 export default BlogController;