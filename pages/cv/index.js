import React, { useEffect } from 'react';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function CV() {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = `/cv.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <Head>
      <title>Vlad Ryabinin | CV</title>
    </Head>
  );
}
