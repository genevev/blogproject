import db from '../models';

class BlogService { 

    static async createBlog (blogModel) { 
        const res = await db.Blog.create(blogModel);
        return res;
    }
    
    static async getAllBlog (id) { 
        const res = await db.Blog.findAll({ where: { userId: id }});
        return res;
    }

    static async getOneBlog (reqTitl) { 
        const res = await db.Blog.findOne({ where: { title: reqTitl }});
        return res;
    }

    static async getSingleBlog (postId) { 
        const res = await db.Blog.findOne({ where: { id: postId }});
        return res;
    }

    static async deleteBlog (reqId) { 
        const res = await db.Blog.destroy({ where: { id: reqId }});
        return res;
    }

    static async updateBlog (Blog, postId) { 
        const res = await db.Blog.update({ where: { id: blogId }});
    }
}

export default BlogService;