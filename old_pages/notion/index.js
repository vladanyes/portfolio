import React from 'react';
import Link from 'next/link';
import { getDatabase } from '../../lib/notion';

export default function Home({ pages }) {
  console.table(pages);

  return (
    <ol>
      {pages.map((page) => {
        return (
          <li key={page.id}>
            <Link href={`/notion/posts/${page.id}`}>{page.properties.Title.title[0]?.plain_text}</Link>
          </li>
        );
      })}
    </ol>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase();

  return {
    props: {
      pages: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
