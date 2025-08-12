import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
  const [count, setCount] = useState(0);
  //   let count = 0;
//   console.log("CountState Rendered");

  const onClickHandler = (e) => {
    const num = parseInt(e.target.value);
    setCount(num + count);
    // count += num;
    // console.log(count);
    // document.querySelector('h1').innerText = count;
  };

  /**
   * State란 Component가 가질 수 있는 상태를 의미
   * State를 사용해서 Component가 Rendering될 때 데이터를 보유하고, 이 데이터를 업데이트 하여
   * 화면을 다시 Rendering할 수 있도록 하는 기능을 제공
   * useState는 배열을 반환, 첫 번째 요소가 현재 상태의 값, 두 번째 요소가 상태를 업데이트 해주는 함수를 반환
   * 자동 Re-Rendering 되어 State 데이터들이 변경되면 html에도 자동적으로 변경사항이 적용된다
   * 상태가 변경되어도 새로고침을 할 필요가 없게 된다.
   */

  return (
    <div>
      <CountHeader count={count} />
      <CountButton value={1} onClick={onClickHandler} text={"+1"} />
      <CountButton value={-1} onClick={onClickHandler} text={"-1"} />
    </div>
  );
}

export default CountState;

/**
 * React의 동작 원리
 *
 * 1. 가상돔(Virtual Dom)
 * 우리가 실제로 보는 화면 돔(DOM)이라는 트리구조로 관리,
 * 화면이 변화가 생길 때마다 이 실제 돔을 직접 조작하는 것은 비효율적이다.
 * 실제 돔의 구조를 그대로 복사한 가상 돔을 메모리에 생성합니다.
 * 상태(State)에 변화가 생기면, React는 실제 돔을 건드리지 않고 메모리에 새 가상돔을 생성한다.
 * 이전 가상 돔 상태가 바뀐 새 가상 돔과 비교하여 무엇이 바뀌었는지 그 차이점(diff)을 빠르게 찾아낸다.
 * 찾아낸 다음, 변경 된 부분만 모아서 실제 돔에게 이 부분만 바뀌었으니 여기만 좀 바꿔봐라고 최종 업데이트를 요청한다.
 *
 * 2. 컴포넌트(Component)
 * 재사용이 가능한 레고 블럭
 * 재사용이 가능하도록 UI를 만들고 여러 조각으로 나누어서 관리하는데, 이 조각 하나하나를 컴포넌트라고 한다.
 * 한 화면은 여러 컴포넌트들을 조합하고 합쳐 하나의 화면을 만든다.
 *
 */
