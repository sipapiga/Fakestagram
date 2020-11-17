import React from 'react';

export default function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <style jsx>
        {`
          div {
            border: 1px solid #eee;
            box-shadow: 0 sp 3px #ccc;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
