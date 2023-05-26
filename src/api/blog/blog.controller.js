const Blogs = require("./blog.model");

module.exports = {
  //CREATE POST
  // async createBlog(req, res) {

    // try {
    //   const { blogContent, blogImages, blogImage, tags } = req.body;
    //   const newBlog = await Blogs.create({
    //     blogContent,
    //     blogImages,
    //     blogImage,
    //     tags,
    //   });

    //   res.status(201).json({
    //     message: "Blog created Successfully!",
    //     newBlog,
    //   });
    // } catch (error) {
    //   res.status(500).json({
    //     message: "Blog could not be created",
    //   });
    // }
  // },

  //READ POSTS
  // async getBlogData(_, res) {
  //   try {
  //     const blogs = await Blogs.find();
  //     res.status(201).json({ message: "Success!", blogs });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: "Blogs were not retrieved",
  //     });
  //   }
  // },

  // async getBlogDataById(req, res) {
  //   try {
  //     const { blogId } = req.params;

  //     const blog = await Blogs.findById(blogId);

  //     res.status(201).json({ message: "Success!", blog });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: `The blog with id=> ${blogId} could not be retrieved!`,
  //     });
  //   }
  // },

  // //UPDATE POST
  // async updateBlogInfo(req, res) {
  //   const [_, token] = req.headers.authorization.split(" ");
  //   const { blogId } = req.params;

  //   if (!token) {
  //     return res.status(401).json({ message: "Missing authorization token!" });
  //   }

  //   try {
  //     const updatedData = req.body;

  //     const updatedBlog = await Blogs.findByIdAndUpdate(blogId, updatedData, {
  //       new: true,
  //     });

  //     if (updatedBlog === null) {
  //       throw new Error("!");
  //     }

  //     res
  //       .status(201)
  //       .json({ message: "Blog updated successfully!", updatedBlog });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: `There is no blog with id# => ${blogId}${error.message}`,
  //     });
  //   }
  // },

  // //DELETE POST
  // async deleteBlog(req, res) {
  //   try {
  //     const { blogId } = req.params;
  //     const result = await Blogs.findByIdAndDelete(blogId);

  //     if (result === null) {
  //       throw new Error("There is no blog with that id!");
  //     }

  //     res.status(200).json({ message: `Blog deleted successfully` });
  //   } catch (error) {
  //     res.status(500).json({ message: `The blog was not deleted. ${error}` });
  //   }
  // },

  // //ADD LIKE

  // async addLikes(req, res) {
  //   try {
  //     const { blogId } = req.params;

  //     if (!req.body.like) {
  //       throw new Error("!");
  //     }

  //     await Blogs.findByIdAndUpdate(blogId, {
  //       $inc: { likes: 1 },
  //     });

  //     const updatedBlog = await Blogs.findById(blogId);
  //     res
  //       .status(200)
  //       .json({ message: `Like added. Total likes: ${updatedBlog.likes}` });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: `There was an error and we could not process your like ${error}`,
  //     });
  //   }
  // },

  // //COMMENT SUBPLOT
  // //CREATE COMMENT
  // async addComment(req, res) {
  //   try {
  //     const { blogId } = req.params;
  //     const blog = await Blogs.findById(blogId);

  //     if (!blog) {
  //       throw new Error(`There is no blog with and id => ${blogId}`);
  //     }

  //     const { commenter, comment } = req.body;

  //     if (!commenter || !comment) {
  //       throw new Error(`The comment has a missing component`);
  //     }

  //     console.log(
  //       "🔷 / file: blog.controller.js:138 / addComment / req.body =>",
  //       req.body
  //     );

  //     blog.comments.push({ commenter, comment, date: new Date() });
  //     const updatedBlog = await blog.save();
  //     res.status(200).json({
  //       message: `Comment added successfully`,
  //       comments: updatedBlog.comments,
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: `There was an error while trying to add the comment. ${error}`,
  //     });
  //   }
  // },

  // //DELETE COMMENT
  // async deleteComment(req, res) {
  //   try {
  //     const { blogId, commentId } = req.params;

  //     const blog = await Blogs.findOneAndUpdate(
  //       { _id: blogId },
  //       { $pull: { comments: { _id: commentId } } },
  //       { new: true }
  //     );

  //     if (!blog) {
  //       throw new Error(`Blog with id# => ${blogId} not found`);
  //     }

  //     const comment = blog.comments.find((comment) => comment._id == commentId);
  //     if (!comment) {
  //       throw new Error(`Comment with id# => ${commentId} not found`);
  //     }

  //     res.status(200).json({
  //       message: `Comment deleted successfully`,
  //     });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ message: `The comment could not be deleted. ${error}` });
  //   }
  // },

  // async XXXX(req, res) {
  //   try {
  //   } catch (error) {
  //     res.status(500).json({ message: ` ${error}` });
  //   }
  // },
};
