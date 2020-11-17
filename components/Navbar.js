import React from 'react';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <style jsx>
        {`
    ul {
      height:3.5rem;
      background: #333;
      color:white;
      list-style:none;
      display:flex
      justify-content: space-between;
      margin-block-start:0px;
      margin-block-end: 0px;
    }
    ul li{
      font-size:18px;
      margin-right:20px;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 15px;

    }
    ul li a {
      color:white;
      text-decoration:none:
    }
    `}
      </style>
    </div>
  );
}
