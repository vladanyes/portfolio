import React from 'react';
import Card from './card';

const Articles = ({ posts }) => {
  const leftPostsCount = Math.ceil(posts.length / 5);
  const leftPosts = posts.slice(0, leftPostsCount);
  const rightPosts = posts.slice(leftPostsCount, posts.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftPosts.map((article, i) => {
            return <Card article={article} key={`article__left__${article.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightPosts.map((article, i) => {
              return <Card article={article} key={`article__left__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
