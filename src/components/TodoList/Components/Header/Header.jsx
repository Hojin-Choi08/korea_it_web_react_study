/**@jsxImportSource @emotion/react */
import { IoSearchSharp } from "react-icons/io5";
import * as s from "./styles";
import { useState } from "react";

function Header({ filter, setFilter, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchInputOnChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };
  const filterOnChangeHandler = (e) => {
    setFilter(e.target.id);
  };
  const searchButtonOnClickHandler = () => {
    setSearchText(searchInputValue);
  };
  return (
    <div>
      <div css={s.container}>
        <input
          type="text"
          css={s.searchInput}
          placeholder="검색어를 입력해주세요"
          onChange={searchInputOnChangeHandler}
        />
        <button
          css={s.searchButton}
          onClick={searchButtonOnClickHandler}
        >
          <IoSearchSharp />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input
          type="radio"
          id="all"
          name="filter"
          checked={filter === "all"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="all">전체</label>
        <input
          type="radio"
          id="complete"
          name="filter"
          checked={filter === "complete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="complete">완료</label>
        <input
          type="radio"
          id="incomplete"
          name="filter"
          checked={filter === "incomplete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="incomplete">미완료</label>
      </div>
    </div>
  );
}

export default Header;
