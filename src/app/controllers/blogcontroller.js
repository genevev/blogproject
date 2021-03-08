import BlogService from '../../database/services/blogservice';

import GenericRes from '../helpers/response';

class BlogController { 

    static async createBlog(req, res, next) { 

        const { user_Id, title, description } = req.body;
        
         

        try { 

            const blogModel = { user_Id, title, description };

            const newBlog = await BlogService.createBlog(blogModel);

            if(newBlog) { 
               
                GenericRes.console.error(res, 405, 'Please reconnect to internet');                
            }

            const getBlogId = await BlogService.getOneBlog(title);
            const {id, createdAt } = getBlogId;

            GenericRes.success(res, 201, 'Blog successfully created', {id, userId, createdAt });
        } catch(error) { 
            GenericRes.console.error(res, 406, e.message);
        }
    }
}