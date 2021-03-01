import Articles from '../../components/articles';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout';

const Category = ({ category, categories }) => {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <Articles posts={category.posts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI('/categories');

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?id=${params.slug}`))[0];
  const categories = await fetchAPI('/categories');

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
