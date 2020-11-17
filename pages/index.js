import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
function fetchImageList() {
  const url = 'https://image-mock-data.firebaseio.com/images.json';
  return fetch(url);
}

export default function Home(props) {
  return (
    <Layout>
      <div className="ui container" style={{ marginTop: '30px' }}>
        {props.imageList &&
          props.imageList.map((item, index) => {
            return (
              <div key={index}>
                <div className="container">
                  <img src={item.imageURL} />
                </div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <Link href={`/image/${index}`}>
                  <div className="right floated">
                    <button
                      className="ui pink button "
                      style={{ width: '20%' }}
                    >
                      Read More...
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        <style jsx>
          {`
            img {
              width: 70%;
            }

            ,
            div {
              display: grid;
              margin: 5px 0px 5px;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetchImageList();
  const json = await data.json();
  return {
    props: {
      imageList: json,
    },
  };
}
