import styled from "styled-components";

export const Container = styled.div`
  max-width: 450px;
  margin: 50px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #ffe6f0;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  text-align: center;
  color: #ff4da6;
  margin-bottom: 30px;
  font-size: 2em;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid #ffc0da;
  background: #fff0f5;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ff66b2;
  }
`;

export const AddButton = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  background: #ff66b2;
  color: white;
  border: none;
  border-radius: 10px;
  transition: background 0.3s;

  &:hover {
    background: #ff3399;
  }
`;

export const TaskListUL = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 15px;
  background-color: #ffe0f2;
  border-left: 5px solid #ff4da6;
  border-radius: 10px;
`;

export const DeleteButton = styled.button`
  background: #ff3399;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #ff1a75;
  }
`;
