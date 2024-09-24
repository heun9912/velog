import { Header } from "./Header";
import { Nav } from "./nav";
import { Cards } from "./cards";
import { postData } from "./components/DUMMY_DATA";
import { useState } from "react";
import { VelogWrite } from "./VelogWrite";
import { useEffect } from "react";
import Weather from "./weather";

function App() {
  const [currentMode, setCurrentMode] = useState("trending");
  const [isWrite, setIsWrite] = useState(false);
  const [Data, setData] = useState(postData);
  // const [write, setWrite] = useState("trending");
  console.log(currentMode);
  console.log(isWrite);
  const velogData = JSON.parse(localStorage.getItem("getData"));
  console.log("123456", velogData);
  // 1. 포스트 데이터안에 객체로 처음으로 가져오는데 usestate값을 가져온다.
  // 1.1 가져온값이 어떤값인지 확인(배열, 객체)해 본다.
  // 2. 배열의 요소 만큼 반복 시킨다. react에서는 보통 map을 사용
  // 3. map사용후 키에 index값을 넣고 cards에 props(item)을 적용한다
  // 4. onClick에 2개의 함수를 넣기 위해서는 {}을 넣은뒤 사용한다.
  //    onClick(()=>{})
  const currentReceiveData = Data[currentMode];
  console.log("2222222222", Data);
  console.log("111111111111111111", currentReceiveData);
  // console.log("data", postData);
  // console.log("123", dd);
  useEffect(() => {
    if (!velogData) {
      setData(postData);
    } else {
      setData(velogData);
    }
  }, []);
  return (
    <>
      <Header setIsWrite={setIsWrite} isWrite={isWrite} />
      <Weather />
      <Nav setCurrentMode={setCurrentMode} />
      {isWrite ? (
        <VelogWrite
          setData={setData}
          currentMode={currentMode}
          velogData={velogData}
        />
      ) : (
        <ul className="main">
          {currentReceiveData.map((item, index) => (
            <li className="mainLi" key={index}>
              <Cards {...item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
