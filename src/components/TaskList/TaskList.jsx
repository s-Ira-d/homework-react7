import React, { Component } from "react";
import {
  Container,
  Title,
  InputContainer,
  Input,
  AddButton,
  TaskListUL,
  TaskItem,
  DeleteButton,
} from "./TaskList.styled.js";

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "task-1" },
    { id: 2, text: "task-2" },
    { id: 3, text: "task-3" },
  ];

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  addTask = () => {
    const text = this.inputRef.current.value.trim();
    if (text) {
      const newId = TaskList.tasks.length
        ? TaskList.tasks[TaskList.tasks.length - 1].id + 1
        : 1;
      TaskList.tasks.push({ id: newId, text });
      this.inputRef.current.value = "";
      this.forceUpdate();
    }
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <Container>
        <Title>список завдань</Title>
        <InputContainer>
          <Input ref={this.inputRef} placeholder="нове завдання" />
          <AddButton onClick={this.addTask}>додати</AddButton>
        </InputContainer>

        <TaskListUL>
          {TaskList.tasks.map((task) => (
            <TaskItem key={task.id}>
              {task.text}
              <DeleteButton onClick={() => this.deleteTask(task.id)}>
                видалити
              </DeleteButton>
            </TaskItem>
          ))}
        </TaskListUL>
      </Container>
    );
  }
}

export default TaskList;
