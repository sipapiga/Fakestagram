import React, { useState, useEffect } from 'react';

function fetchImageList() {
  const url = 'https://image-mock-data.firebaseio.com/images.json';
  return fetch(url);
}

export default function contact(props) {
  const [msg, setMsg] = useState('Hello');
  /*   const [imageData, setImageData] = useState(null); */

  /*  useEffect(async () => {
    const data = await fetchImageList();
    const json = await data.json();
    console.log(json);
    setImageData(json);
  }, []); */
  return (
    <div>
      Contact Page {msg}
      {/*  {imageData &&
        imageData.map((item, index) => {
          <img src={item.imageURL} alt="" />;
          return (
            <div key={index}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          );
        })} */}
      {props.imageList &&
        props.imageList.map((item, index) => {
          return (
            <div key={index}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
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
