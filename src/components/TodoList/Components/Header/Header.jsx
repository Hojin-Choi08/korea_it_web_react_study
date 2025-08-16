/**@jsxImportSource @emotion/react */
import { IoSearchSharp } from "react-icons/io5";
import * as s from "./styles";

function Header() {
  return (
    <div>
      <div css={s.container}>
        <input type="text" css={s.searchInput} />
        <button css={s.searchButton}>
          <IoSearchSharp />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input type="radio" id="all" name="filter" />
        <label htmlFor="all">전체</label>
        <input type="radio" id="complete" name="filter" />
        <label htmlFor="complete">완료</label>
        <input type="radio" id="incomplete" name="filter" />
        <label htmlFor="incomplete">미완료</label>
      </div>
    </div>
  );
}

export default Header;
