import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const AddButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;

export const TaskListUL = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px;
  background-color: #f4f4f4;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;
