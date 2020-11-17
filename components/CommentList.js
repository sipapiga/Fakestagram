import React from 'react';

export default function CommentList({ comments }) {
  return (
    <div>
      {comments ? (
        <>
          {Object.entries(comments).map((comment, index) => {
            return (
              <div key={index} className="ui card" style={{ width: 'auto' }}>
                <div className="content">{comment[1].message}</div>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
