import React from 'react';
import { Outlet } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

export default Articles;
