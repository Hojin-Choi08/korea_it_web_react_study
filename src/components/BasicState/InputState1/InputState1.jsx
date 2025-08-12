import { useState } from "react";

function InputState1() {
  const [InputValue1, setInputValue1] = useState("");
  const [h1Text1, setH1Text1] = useState("");

  const [InputValue2, setInputValue2] = useState("");
  const [h1Text2, setH1Text2] = useState("");

  const inputOnChangeHandler1 = (e) => {
    setInputValue1(e.target.value);
  };

  const inputOnChangeHandler2 = (e) => {
    setInputValue2(e.target.value);
  };

  const onClickHandler = () => {
    setH1Text1(InputValue1);
    setH1Text2(InputValue2);
  };

  return (
    <div>
      <h1>{h1Text1}</h1>
      <h1>{h1Text2}</h1>
      <input type="text" value={InputValue1} onChange={inputOnChangeHandler1} />
      <input type="text" value={InputValue2} onChange={inputOnChangeHandler2} />
      <button onClick={onClickHandler}>확인</button>
    </div>
  );
}

export default InputState1;
