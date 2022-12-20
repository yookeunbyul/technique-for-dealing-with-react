import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = category === 'all' ? '' : `&category=${category}`;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a3a5997ec2014483900ba01501ed6cac`,
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
