
import pool from "../config/db.js";

//retrieve all blogs
const getAllBlogs = async () => {
  const query = `
    SELECT *
    FROM blogs
    ORDER BY created_at DESC
  `;

  const result = await pool.query(query);

  return result.rows;
};

//retrieve a single blog post
const getBlogById = async (id) => {
  const query = `
    SELECT *
    FROM blogs
    WHERE id = $1
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};

//search blogs by title
const searchBlogs = async (searchTerm) => {
  const query = `
    SELECT *
    FROM blogs
    WHERE title ILIKE $1
    ORDER BY created_at DESC
  `;

  const result = await pool.query(query, [`%${searchTerm}%`]);

  return result.rows;
};

//create blog post
const createBlog = async ({ title, description, image_url }) => {
  const query = `
    INSERT INTO blogs (title, description, image_url)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const values = [title, description, image_url];

  const result = await pool.query(query, values);

  return result.rows[0];
};

//update blog post
const updateBlog = async (id, { title, description, image_url }) => {
  const query = `
    UPDATE blogs
    SET
      title = $1,
      description = $2,
      image_url = $3,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $4
    RETURNING *
  `;

  const values = [title, description, image_url, id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

//delete blog
const deleteBlog = async (id) => {
  const query = `
    DELETE FROM blogs
    WHERE id = $1
    RETURNING *
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};

export { getAllBlogs, getBlogById, searchBlogs, createBlog, updateBlog, deleteBlog };