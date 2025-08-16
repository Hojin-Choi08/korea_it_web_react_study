import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";

function Index() {
  const [todoList, setTodoList] = useState([]);
  return (
    <Layout>
      <Main todoList={todoList} setTodoList= {setTodoList}/>
    </Layout>
  );
}

export default Index;
