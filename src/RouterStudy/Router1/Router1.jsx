/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function Router1() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  //useNavigate는 페이지를 이동시키는 함수를 제공하는 Hook
  //버튼 클릭처럼 특정 로직이 실행된 후에 페이지를 이동시키고 싶을 때 사용
  /**
   * React Router Dom
   * React => Single Page Application (SPA)
   * 페이지 이동(라우팅)을 구현할 수 있게 해주는 라이브러리
   * 페이지의 주소나 링크를 클릭했을 때 페이지 전체를 새로고침하지 않고 주소에 맞는 특정 컴포넌트만
   * 보여주어 마치 여러 페이지가 있는 것처럼 동작하는 것
   */
  const layout = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;
  const header = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    background-color: darksalmon;
  `;
  const countBox = css`
    display: flex;
  `;
  const main = (color) => css`
    width: 100%;
    height: 800px;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  `;
  const footer = css`
    width: 100%;
    height: 100px;
    background-color: green;
  `;
  return (
    <div css={layout}>
      <header css={header}>
        {/* a태그 클릭 시 브라우저가 페이지 전체를 새로고침 */}
        {/* spa의 장점의 이미가 없어지고 상태도 초기화 됨 */}
        <a href={"/color/red"}>RED</a>
        <a href={"/color/blue"}>BLUE</a>
        <a href={"/color/orange"}>ORANGE</a>
        {/* =================================================== */}
        {/* Link 컴포넌트는 패이지를 새로고침하지 않고 화면의 내용만 부드럽게 교체한다. */}
        <Link to={"/color/red"}>RED(Link)</Link>
        <Link to={"/color/blue"}>BLUE(Link)</Link>
        <Link to={"/color/orange"}>ORANGE(Link)</Link>
        {/* =========================================== */}
        <button onClick={() => navigate("/color/red")}>RED</button>
        <button onClick={() => navigate("/color/blue")}>BLUE</button>
        <button onClick={() => navigate("/color/orange")}>ORANGE</button>
        <div css={countBox}>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        </div>
      </header>
      {/* <Routes>는 여러 <Route>들을 감싸는 영역 */}
      {/* <Route>는 특정 경로(path)와 그 경로애서 보여줄 컴포넌트(element)를 이어주는 역할 */}
      {/* 브라우저의 주소창이 path와 일치하는 Route를 찾아 해당 컴포넌트를 화면에 띄워줌 */}
      {/* 단 Routes안에 있는 여러 Route중 path가 일치하는거 하나만 띄워줌 */}
      <Routes>
        <Route
          path="/"
          element={<main css={main("white")}>Main HomeScreen</main>}
        />
        <Route
          path="/color/red"
          element={<main css={main("red")}>Red Screen</main>}
        />
        <Route
          path="/color/blue"
          element={<main css={main("blue")}>Blue Screen</main>}
        />
        <Route
          path="/color/orange"
          element={<main css={main("orange")}>Orange Screen</main>}
        />
      </Routes>
      <footer css={footer}>Footer Area</footer>
    </div>
  );
}

export default Router1;
