import pool from "../config/db.js";


//table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

//sample posts
const seedQuery = `
  INSERT INTO blogs (title, description, image_url)
  VALUES
    (
      'Getting Started with Node.js',
      'An introduction to server-side JavaScript development.',
      'https://example.com/nodejs.jpg'
    ),
    (
      'Understanding Express.js',
      'Learn how Express simplifies building web applications and APIs.',
      'https://example.com/express.jpg'
    ),
    (
      'Introduction to PostgreSQL',
      'Understanding relational databases and SQL queries.',
      'https://example.com/postgresql.jpg'
    ),
    (
      'Building REST APIs',
      'A practical guide to creating RESTful APIs with Node.js.',
      NULL
    );
`;
const populateDB = async () => {
  
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    
    await client.query(createTableQuery);

    const result = await client.query(
      "SELECT COUNT(*) FROM blogs"
    );

    if (Number(result.rows[0].count) === 0) {
      await client.query(seedQuery);
      console.log("Sample blogs inserted successfully!");
    } else {
      console.log("Blogs already exist. Skipping seed.");
    }

    await client.query("COMMIT");
    console.log("Database setup completed!");

  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Database seeding failed:", error.message);
  } finally {
    client.release();
    await pool.end();
  }
};

populateDB();