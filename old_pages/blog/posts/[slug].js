import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { fetchAPI } from '../../../lib/api';
import Layout from '../../../components/layout';
import Image from '../../../components/image';

const Article = ({ post, categories }) => {
  return (
    <Layout categories={categories}>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={post.image.url}
        data-srcset={post.image.url}
        data-uk-img
      >
        <h1>{post.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={post.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {post?.author?.picture && (
                <Image
                  image={post?.author.picture}
                  style={{
                    position: 'static',
                    borderRadius: '50%',
                    height: 30,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">By {post?.author?.name}</p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{post.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await fetchAPI('/posts');

  return {
    paths: posts.map((article) => ({
      params: {
        slug: article.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await fetchAPI(`/posts?id=${params.slug}`);
  const categories = await fetchAPI('/categories');

  return {
    props: { post: posts[0], categories },
    revalidate: 1,
  };
}

export default Article;
