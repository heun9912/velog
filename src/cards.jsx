import { useRef } from "react";
import Modal from "./modalDetail"; // 모달 컴포넌트를 가져옵니다.

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
  const modalRef = useRef(); // 모달을 제어하기 위한 ref 생성

  const openModal = () => {
    modalRef.current.openModal(); // 모달 열기 메서드 호출
  };

  return (
    <>
      <div className="card">
        <div className="card-img" onClick={openModal}>
          {" "}
          {/* 클릭 시 모달 열림 */}
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

      {/* 모달 컴포넌트를 추가 */}
      <Modal
        ref={modalRef}
        title={title}
        content={content}
        author={author}
        createdAt={createdAt}
        image={image}
        likes={likes}
        userImage={userImage}
        comments={comments}
      />
    </>
  );
}

export { Cards };
