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
    { id: 1, text: "Task-1" },
    { id: 2, text: "Task-2" },
    { id: 3, text: "Task-3" },
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
        <Title>Список завдань</Title>
        <InputContainer>
          <Input ref={this.inputRef} placeholder="Нове завдання" />
          <AddButton onClick={this.addTask}>Додати</AddButton>
        </InputContainer>

        <TaskListUL>
          {TaskList.tasks.map((task) => (
            <TaskItem key={task.id}>
              {task.text}
              <DeleteButton onClick={() => this.deleteTask(task.id)}>
                Видалити
              </DeleteButton>
            </TaskItem>
          ))}
        </TaskListUL>
      </Container>
    );
  }
}

export default TaskList;
