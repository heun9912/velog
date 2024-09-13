import { useState } from "react";
// import { postData } from "./components/DUMMY_DATA";
function Cards({
  title,
  content,
  author,
  createdAt,
  image,
  likes,
  userImage,
  comments,
}) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="cardtext">
          <div className="main-contents">
            <p className="title">{title}</p>
            <p className="contents">{content}</p>
            <div className="showdate">
              <span className="date">{createdAt}</span>
              <span className="name">{comments}개의 댓글</span>
            </div>
          </div>
          <div className="f-contents">
            <div className="l-f">
              <img src={userImage} alt="" />
              <span>{author}</span>
            </div>
            <div className="r-f">
              <button>
                ♥ <span>{likes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Cards };
