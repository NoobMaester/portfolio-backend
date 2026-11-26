
const validateBlog = (req, res, next) => {
  const { title, description, image_url } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
      data: null
    });
  }

  if (title.length > 150) {
    return res.status(400).json({
      success: false,
      message: "Title cannot exceed 150 characters",
      data: null
    });
  }

  if (!description || !description.trim()) {
    return res.status(400).json({
      success: false,
      message: "Description is required",
      data: null
    });
  }

  if (
    image_url !== undefined &&
    typeof image_url !== "string"
  ) {
    return res.status(400).json({
      success: false,
      message: "Image URL must be a string",
      data: null
    });
  }

  next();
};

export default validateBlog;
