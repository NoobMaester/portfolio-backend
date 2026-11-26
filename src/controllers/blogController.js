
import {
  getAllBlogs,
  getBlogById,
  searchBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} from "../models/blogModel.js";

const getBlogs = async (req, res, next) => {
  try {
    const { search } = req.query;

    const blogs = search
      ? await searchBlogs(search)
      : await getAllBlogs();

    res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully",
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const blog = await getBlogById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog retrieved successfully",
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

const addBlog = async (req, res, next) => {
  try {
    const blog = await createBlog(req.body);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

const editBlog = async (req, res, next) => {
  try {
    const blog = await updateBlog(req.params.id, req.body);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

const removeBlog = async (req, res, next) => {
  try {
    const blog = await deleteBlog(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

export {
  getBlogs,
  getBlog,
  addBlog,
  editBlog,
  removeBlog
};
