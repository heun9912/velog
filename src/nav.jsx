import { useState } from "react";
import { Cards } from "./cards";
// import { postData } from "./components/DUMMY_DATA";
export function Nav({ setCurrentMode }) {
  const [css, setCss] = useState("menu1");
  // console.log("ddd", postData);
  return (
    <>
      <nav>
        <span
          className="menu"
          style={{ color: css === "menu1" ? "red" : "" }}
          onClick={() => {
            setCss("menu1");
            setCurrentMode("trending");
          }}
        >
          트랜딩
        </span>

        <span
          className="menu"
          style={{ color: css === "menu2" ? "red" : "" }}
          onClick={() => {
            setCss("menu2");
            setCurrentMode("latest");
          }}
        >
          최신
        </span>

        <span
          className="menu"
          style={{ color: css === "menu3" ? "red" : "" }}
          onClick={() => {
            setCss("menu3");
            setCurrentMode("feed");
          }}
        >
          피드
        </span>
      </nav>
    </>
  );
}
