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

    static async getOneBlog (postId) { 
        const res = await db.Blog.findOne({ where: { id: postId }});
        return res;
    }

    static async getOneBlogByTitle (title) { 
        const res = await db.Blog.findOne({ where: { title }});
        return res;
    }

    static async getSingleBlog(blog_id, user_id) { 
        const res = await db.Blog.findOne({ where: {id: blog_id, userId: user_id }});
        return res;
    }
}

export default BlogService;