const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
} = require("../controller/posts");
const auth = require("../middelware/auth");
router.get("/", getPosts);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePosts);
router.delete("/:id", auth, deletePosts);
router.patch("/:id/likePost", auth, likePosts);

module.exports = router;
