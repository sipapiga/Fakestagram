import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>FakeStagram</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
}
