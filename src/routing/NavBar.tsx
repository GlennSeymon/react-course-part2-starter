import { useContext } from "react";
import TasksContext from "../state-management/contexts/tasksContexts";
import AuthContext from "../state-management/contexts/authContext";

const NavBar = () => {
  const {tasks} = useContext(TasksContext);
  const {user} = useContext(AuthContext);
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tasks: {tasks.length}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                User: {user}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
