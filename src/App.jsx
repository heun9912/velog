import { Header } from "./Header";
import { Nav } from "./nav";
import { Cards } from "./cards";
import { postData } from "./components/DUMMY_DATA";
import { useState } from "react";
import { VelogWrite } from "./velogWrite";

function App() {
  const [currentMode, setCurrentMode] = useState("trending");
  const [isWrite, setIsWrite] = useState(false);
  const [Data, setData] = useState(postData);
  console.log(currentMode);
  console.log(isWrite);

  // 1. 포스트 데이터안에 객체로 처음으로 가져오는데 usestate값을 가져온다.
  // 1.1 가져온값이 어떤값인지 확인(배열, 객체)해 본다.
  // 2. 배열의 요소 만큼 반복 시킨다. react에서는 보통 map을 사용
  // 3. map사용후 키에 index값을 넣고 cards에 props(item)을 적용한다
  // 4. onClick에 2개의 함수를 넣기 위해서는 {}을 넣은뒤 사용한다.
  //    onClick(()=>{})
  const currentReceiveData = Data[currentMode];
  // console.log("data", postData);
  // console.log("123", dd);

  return (
    <>
      <Header setIsWrite={setIsWrite} isWrite={isWrite} />
      <Nav setCurrentMode={setCurrentMode} />
      {isWrite === true ? (
        <VelogWrite setData={setData} />
      ) : (
        <ul>
          {currentReceiveData.map((item, index) => (
            <li key={index}>
              <Cards {...item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
