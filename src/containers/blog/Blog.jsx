import React from "react";
import "./blog.css";
import { Article } from "../../components";
import data from "./imports";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-headding">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        {data.map((item) => (
          <Article
            date={item.date}
            title={item.title}
            imgurl={item.image}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
