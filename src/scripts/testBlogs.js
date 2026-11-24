//import { getAllBlogs } from "../models/blogModel.js";

//import { getBlogById } from "../models/blogModel.js";

//import { searchBlogs } from "../models/blogModel.js";

import { deleteBlog } from "../models/blogModel.js";

import pool from "../config/db.js";

try {
  //const blogs = await getAllBlogs();
  //const blog = await getBlogById(1);
  //const blogs = await searchBlogs("node");

  //const updatedBlog = await updateBlog(5, {
    //title: "Learning SQL queries",
    //description: "An updated intro to PostgreSQL by my team leader",
    //image_url: null
  //});

  const deletedBlog = await deleteBlog(5);

  console.log("Blogs deleted successfully:");
  console.log(deletedBlog);
} catch (error) {
  console.error("Error retrieving blog:", error.message);
} finally {
  await pool.end();
}