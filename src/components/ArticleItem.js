import React from 'react';
import { NavLink } from 'react-router-dom';

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <div>
      <li>
        <NavLink
          to={`/articles/${id}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 {id}
        </NavLink>
      </li>
    </div>
  );
};

export default ArticleItem;
