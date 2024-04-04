import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/reducers/authReducer";
import NavBar from "./routing/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContexts";
import AuthContext from "./state-management/contexts/authContext";
import LoginStatus from "./state-management/LoginStatus";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');
  
  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch}}>
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch}}>
      <NavBar />
      <LoginStatus />
      <HomePage />
    </TasksContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
