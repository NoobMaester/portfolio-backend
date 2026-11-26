
import { Router } from "express";

import {
  getBlogs,
  getBlog,
  addBlog,
  editBlog,
  removeBlog
} from "../controllers/blogController.js";

import validateBlog from "../middleware/validateBlog.js";

const blogRouter = Router();

blogRouter.get("/", getBlogs);
blogRouter.get("/:id", getBlog);
blogRouter.post("/", validateBlog, addBlog);
blogRouter.put("/:id", validateBlog, editBlog);
blogRouter.delete("/:id", removeBlog);

export default blogRouter;
