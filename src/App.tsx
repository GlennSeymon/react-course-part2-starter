import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./routing/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContexts";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  
  return (
    <TasksContext.Provider value={{ tasks, dispatch}}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  )
}

export default App;
