import React from "react";
import TaskList from "./components/TaskList/TaskList.jsx";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #ffe6f2; /* дуже світлий рожевий */
  min-height: 100vh;
  padding: 50px 20px;
`;

function App() {
  return (
    <PageWrapper>
      <TaskList />
    </PageWrapper>
  );
}

export default App;
