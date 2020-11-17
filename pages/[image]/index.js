import React, { useEffect } from 'react';

export default function index(props) {
  useEffect(() => {
    console.log(props.image);
  }, []);
  return (
    <div>
      {console.log(props)}
      HEJ
    </div>
  );
}

export async function getServerSideProps(ctx) {
  console.log(ctx);
  return {
    props: {
      image: ctx.query.image,
    },
  };
}
