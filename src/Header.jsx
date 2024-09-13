import { useState } from "react";

export function Header({ setIsWrite, isWrite }) {
  return (
    <header>
      <h1>velog</h1>
      <div>
        <button
          onClick={() => {
            setIsWrite((prev) => !prev);
          }}
        >
          글쓰기
        </button>
        <button>검색</button>
        <button>로그인</button>
      </div>
    </header>
  );
}
