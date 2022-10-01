import React from "react";

import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Blog.scss";

const BlogCard = ({ blog: { imgUrl, date, title, poster, desc } }) => (
  <div className="blog-img-card">
    <img src={imgUrl} alt="customer" className="img-blog" />
    <div className="app-blog-card-content">
      <div className="date-and-poster">
        <p>{date}</p>
        <p>- {poster}</p>
      </div>
      <p className="blog-card-title">{title}</p>
      <p className="blog-desc">{desc}</p>
      <div className="read-more">Read More</div>
    </div>
  </div>
);

const Blog = () => (
  <div className="app-bg app-wrapper flex-center section-padding">
    <div className="">
      <div className="blog-title">
        <SubHeading title="Blogs" />
        <h1 className="headtext-cormorant">Gerícht updates</h1>
      </div>

      <div className="app-blog-wrapper">
        {data.blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.title} />
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
