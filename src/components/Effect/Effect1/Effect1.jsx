import { useEffect, useState } from "react";

function Effect1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [h1Name, setH1Name] = useState("");
  const [h1Age, setH1Age] = useState("");

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageOnChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const nameOnClickHandler = () => {
    setH1Name(name);
    //set함수는 즉시 실행이 아니다 => 이벤트 핸들러 함수가 모두 끝나면, h1Name의 값을 name의 값으로 바꿔서
    //다시 컴포넌트를 랜더링해주세요 라고 예약하는 것
    // console.log(h1Name);
    //React는 일괄 처리
    //상태 업데이트 요청이 들어오면 모아서 한 번에 처리
    //만약 set함수를 즉시 실행한다면 작은 변화에도 컴포넌트를 다시 랜더링하기 때문에 느려진다
  };

  const ageOnClickHandler = () => {
    setH1Age(age);
    // console.log(h1Age);
  };

  //useEffect의 기본형
  useEffect(() => {
    console.log("마운트 됨");
    console.log(h1Name);
    console.log(h1Age);

    return () => {
        console.log("언마운트 됨");
    }
  }, [h1Name, h1Age]); //의존성 배열에 h1Name과 h1Age를 넣으면, 이 값들이 변경될 때마다 useEffect가 실행됨

  return (
    <div>
      <h1>이름: {h1Name}</h1>
      <h1>나이: {h1Age}</h1>
      <input type="text" value={name} onChange={nameOnChangeHandler} />
      <button onClick={nameOnClickHandler}>이름확인</button>
      <input type="text" value={age} onChange={ageOnChangeHandler} />
      <button onClick={ageOnClickHandler}>나이확인</button>
    </div>
  );
}

export default Effect1;
