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
    { id: 1, text: "task--1" },
    { id: 2, text: "task--2" },
    { id: 3, text: "task--3" },
  ];

  constructor(props) {
    super(props);
    this.text = "";
  }

  handleChange = (e) => {
    this.text = e.target.value;
  };

  addTask = () => {
    if (this.text.trim() === "") return;

    let newId = TaskList.tasks.length + 1;

    TaskList.tasks.push({
      id: newId,
      text: this.text,
    });

    this.text = "";
    this.setState({});
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.setState({});
  };

  render() {
    return (
      <Container>
        <Title>список завдань</Title>

        <InputContainer>
          <Input
            value={this.text || ""}
            onChange={(e) => ((this.text = e.target.value), this.setState({}))}
            placeholder="нове завдання"
          />
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
