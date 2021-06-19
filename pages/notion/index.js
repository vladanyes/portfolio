import React from 'react';
// import Link from 'next/link';
import { getDatabase } from '../../lib/notion';
// import { Text } from "./[id].js";

export default function Home({ pages }) {
  // console.table(pages);

  return (
    <div>
      {pages.map((page) => {
        return <div key={page.id}>{JSON.stringify(page)}</div>;
      })}
    </div>
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
