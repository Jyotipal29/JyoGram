const { default: mongoose } = require("mongoose");
const Post = require("../model/post");

//get post
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create post
const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).jons({ message: error.message });
  }
};

// update posts
const updatePosts = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with that id");
  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatedPost);
};

//delete post
const deletePosts = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with that id");
  await Post.findByIdAndRemove(id);
  res.json({ message: "post deleted successfully" });
};
const likePosts = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) return res.json({ message: "Unauthenticated" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with that id");
  const post = await Post.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    //like post
    post.likes.push(req.userId);
  } else {
    //dislike post
    post.likes = post.likes.filter(() => id !== String(req.userId));
  }

  const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost);
};

module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
};
