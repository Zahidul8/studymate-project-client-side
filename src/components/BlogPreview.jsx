import React from "react";
import { blogPosts } from "../utils/resourceData";

// Sample blog data


const BlogPreview = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="">
        <h2 className="text-primary text-3xl font-bold text-center mb-6">
          Latest Blog Posts
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Explore study tips, productivity hacks, and student resources from our community.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-base-200 rounded-xl shadow hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
            >
              {/* Category */}
              <span className="text-xs text-primary font-medium mb-2">
                {blog.category}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">{blog.title}</h3>

              {/* Snippet */}
              <p className="text-gray-600 mb-4 flex-1">{blog.snippet}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author & Date */}
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>

              {/* Likes & Comments */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>👍 {blog.likes}</span>
                <span>💬 {blog.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
