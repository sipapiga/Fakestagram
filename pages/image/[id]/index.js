import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import faker from 'faker';
import CommentList from '../../../components/CommentList';

export default function index({ id, imageData, comments }) {
  const [likes, setLikes] = useState(null);
  const [messageInputData, setMessageInputData] = useState('');
  const [commentListData, setCommentListData] = useState(null);

  async function handlePostMessage(e) {
    try {
      await fetch(
        `https://image-mock-data.firebaseio.com/comments/${id}.json`,
        {
          method: 'POST',
          body: JSON.stringify({ message: messageInputData }),
        }
      );
      const commentRes = await fetch(
        `https://image-mock-data.firebaseio.com/comments/${id}.json`
      );
      const commentData = await commentRes.json();
      setCommentListData(commentData);
      setMessageInputData('');
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setLikes(imageData.likes);
    setCommentListData(comments);
  }, []);
  return (
    <Layout>
      {imageData && (
        <div className="ui container " style={{ marginTop: '30px' }}>
          <div className="ui card" style={{ width: '80%' }} key={imageData.id}>
            <div className="content">
              <div className="right floated meta">
                {' '}
                {Math.floor(Math.random() * 24) + 1}h
              </div>
              <img className="ui avatar image" src={faker.image.avatar()} />{' '}
              {faker.name.findName()}
            </div>
            <div className="image">
              <img src={imageData.imageURL} />
            </div>
            <div className="content">
              <strong>{imageData.title}</strong>
              <p>{imageData.description}</p>
              <span className="right floated">
                <div className="ui labeled button" tabIndex="0">
                  <div
                    className="ui red button"
                    onClick={() => setLikes(likes + 1)}
                  >
                    <i className="heart icon"></i> Like
                  </div>
                  <a className="ui basic red left pointing label">
                    {likes} likes
                  </a>
                </div>
              </span>
              <i className="comment icon"></i>
              {commentListData ? (
                <>{Object.keys(commentListData).length} comments</>
              ) : (
                <> 0 comments</>
              )}
            </div>
            <div className="content">
              <div className="ui large transparent left icon input">
                <i className="heart outline icon"></i>
                <input
                  type="text"
                  value={messageInputData}
                  onChange={(e) => setMessageInputData(e.target.value)}
                  placeholder="Add Comment..."
                  required
                />
              </div>
              <button
                className="ui blue button right floated"
                onClick={handlePostMessage}
              >
                Send
              </button>
            </div>
            <div className="content">
              {commentListData ? (
                <>
                  <CommentList
                    key={commentListData.message}
                    comments={commentListData}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>
        {`
          input {
            width: auto;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `https://image-mock-data.firebaseio.com/images/${ctx.query.id}.json`
  );
  const data = await res.json();
  const commentRes = await fetch(
    `https://image-mock-data.firebaseio.com/comments/${ctx.query.id}.json`
  );
  const commentData = await commentRes.json();
  return {
    props: {
      id: ctx.query.id,
      imageData: data,
      comments: commentData,
    },
  };
}
