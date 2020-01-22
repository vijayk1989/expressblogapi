const appRoot = require('app-root-path');
const db = require(appRoot + '/db/db');

const getAllBlogs = async (req, res) => {
  const blogs = await db('blogposts').select('title', 'content');
  res.send(blogs);
};

const getBlogById = async (req, res) => {
  const id = req.params.id || 1;
  const blog = await db('blogposts')
    .select('title', 'content')
    .where('blog_id', id);
  res.send(blog);
};

module.exports = {
  getAllBlogs,
  getBlogById
};
