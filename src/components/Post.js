import React from 'react';

function Post({ image, content, user }) {
  return (
    <>
      {image && (
        <img
          alt="Post cover"
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </>
  );
}

export default Post;
