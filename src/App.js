import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";

// import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"40%",margin:"auto",marginTop:"100px",paddingBottom:"100px"}}>
      Todo Application
     <Todo />

    </div>
  );
}

export default App;
