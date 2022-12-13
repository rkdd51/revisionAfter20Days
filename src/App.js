import { useEffect, useState } from "react";
import AppTwo from "./AppTwo";
import "./styles.css";
import axios from "axios";
export default function App() {
  const [state, setState] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [load, setLoad] = useState(false);
  const [text, setText] = useState([]);
  const [todo, setTodo] = useState("");
  const api = axios.get("https://jsonplaceholder.typicode.com/posts");
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      api
        .then((res) => {
          setApiData(res.data);
          setLoad(false);
        })
        .catch((err) => {
          setLoad(false), console.log(err);
        });
    }, 5000);
  }, []);
  const inc = () => {
    setState(state + 1);
  };
  const dec = () => {
    setState(state - 1);
  };
  const valueSetted = (e) => {
    setTodo(e.target.value);
  };
  const addTodoList = () => {
    if (todo !== "") {
      setText([...text, todo]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {load ? <h1>Loading...</h1> : apiData.map((i) => <li>{i.title}</li>)}
      <br />
      <br />
      <AppTwo inc={inc} dec={dec} state={state} />
      <input value={todo} type="text" onChange={valueSetted} />
      <button onClick={addTodoList}>Add </button>
      <br />
      <br />
      {text.map((todo) => (
        <div>
          <h3>{todo}</h3>
        </div>
      ))}
    </div>
  );
}
