import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import { fetchAPI } from '../lib/api';

export async function getStaticProps() {
  const posts = await fetchAPI('/posts');
  const categories = await fetchAPI('/categories');
  const tags = await fetchAPI('/tags');

  return {
    props: {
      posts,
      categories,
      tags,
    },
    revalidate: 1,
  };
}
export default function Home({ posts, categories, tags }) {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Blog</h1>
          <Articles articles={posts} />
        </div>
      </div>
    </Layout>
  );
}
