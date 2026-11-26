const posts = [
  {
    id: 1,
    title: "Learning Express",
    content: "Understanding controllers and routes."
  },
  {
    id: 2,
    title: "Learning Node.js",
    content: "Building backend applications with JavaScript."
  }
];

export const getAllPosts = (req, res) => {
  res.json(posts);
};