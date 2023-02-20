import React from "react";

const Pagination = () => {
  let pages = [];
  for (let i = 1; i < totalPosts / postsPerPage; i++) {
    pages.push(i);
  }
  return <div>Pagination</div>;
};

export default Pagination;
