import { useState } from "react";
import { useRef } from "react";
// 리액트 훅(hooks)
// 1. useState
// 2. useRef
export function VelogWrite({ setData, currentMode, velogData }) {
  console.log("123");
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const imageRef = useRef();
  const userImageRef = useRef();
  function onSubmit(e) {
    //console.log(title, content, author, image, userImage);

    e.preventDefault(); // 새로고침 방지
    // const title = titleRef.current.value;
    // const content = contentRef.current.value;
    // const author = authorRef.current.value;
    // const image = imageRef.current.value;
    // const userImage = userImageRef.current.value;

    setData((prev) => {
      const trending = currentMode;
      const prevArray = prev[currentMode];
      const newData = {
        id: Date.now(),
        title: titleRef.current.value,
        content: contentRef.current.value,
        author: authorRef.current.value,
        image: imageRef.current.value,
        userImage: userImageRef.current.value,
        creatAt: Date.now(),
      };
      //   prevArray.push(newData);
      // Json.stringy => 자바스크립트 객체 -> json으로 변환
      const newArray = JSON.stringify({
        ...prev,
        [trending]: [...prevArray, newData],
      });
      localStorage.setItem("getData", newArray);
      return {
        ...prev,
        [trending]: [...prevArray, newData],
      };
    });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input type="text" id="content" ref={contentRef} />
        </div>
        <div>
          <label htmlFor="author">사용자</label>
          <input type="text" id="author" ref={authorRef} />
        </div>
        <div>
          <label htmlFor="image">이미지</label>
          <input type="text" id="image" ref={imageRef} />
        </div>
        <div>
          <label htmlFor="userImage">유저이미지</label>
          <input type="text" id="userImage" ref={userImageRef} />
        </div>
        <button>출간하기</button>
      </form>
    </>
  );
}
