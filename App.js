import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import { useState } from "react";

const defaultTodos = [
  {
    title: "Do homework",
    isComplete: false,
  },
  {
    title: "Do laundry",
    isComplete: false,
  },
  {
    title: "Eat vegetables",
    isComplete: true,
  },
];

function App() {
  const [info, setInfo] = useState("1/3")
  const [inputValue, setInputValue] = useState("Hello world");
  const [todos, setTodos] = useState(defaultTodos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
    const nextTodos = [...todos];
    nextTodos.push({ title: inputValue, isComplete: false });
    setTodos(nextTodos);
    setInputValue("")
    }
    else {
      alert("Input cannot be empty!")
    }
  };

  const handleDelete = (index) => {
    const nextTodos = [...todos];
    nextTodos.splice(index, 1)
    setTodos(nextTodos);
  };

  const handleComplete = (index) => {
    const nextTodos = [...todos]
    nextTodos[index].isComplete = !nextTodos[index].isComplete;
    setTodos(nextTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{`${todos.filter(thing => thing.isComplete === true).length} / ${todos.length}`}</h1>
        <List handleComplete={handleComplete} handleDelete={handleDelete} todos={todos} />
        <Form handleComplete={handleComplete} handleSubmit={handleSubmit} inputValue={inputValue} handleInputChange={handleInputChange} />
      </header>
    </div>
  );
}
export default App