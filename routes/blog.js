const router = require('express').Router();
const { getAllBlogs, getBlogById } = require('../controllers/blog');

// Get all blogs
router.get('/', getAllBlogs);

// Get blog by Id
router.get('/:id', getBlogById);

module.exports = router;
