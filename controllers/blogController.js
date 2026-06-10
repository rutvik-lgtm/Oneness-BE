import BlogPost from '../models/BlogPost.js';

// Get all blog posts
export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get single blog post by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await BlogPost.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Create a new blog post
export const createBlog = async (req, res) => {
  try {
    const { title, slug, excerpt, content, author, coverImage, tags } = req.body;

    const blog = new BlogPost({
      title,
      slug,
      excerpt,
      content,
      author,
      coverImage,
      tags
    });

    await blog.save();
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Add comment to blog post
export const addComment = async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    const blog = await BlogPost.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }

    const newComment = {
      name,
      email,
      comment
    };

    blog.comments.push(newComment);
    await blog.save();

    res.status(201).json({ success: true, message: 'Comment added successfully!', data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
