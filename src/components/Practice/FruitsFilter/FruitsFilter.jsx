import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
  const [search, setSearch] = useState(fruits);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const newSearch = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log("새로운 필터된 배열:", newSearch);
    setSearch(newSearch);
    console.log("마운트 됨");

    return () => {
      console.log("언마운트 됨");
    };
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <ul>
        {search.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;

//input하나 만들고 ul하나 만들고 input에 과일 이름을 검색해서 filter를 거친 뒤에 li로 출력
//최초에는 전체 과일을 보여주고 내가 입력을 할 때마다 즉시 filter를 거쳐서 li로 보여주기
