import './App.css';
import logo from './pictures/Logo.png';
import TaskList from './components/taskList';

function App() {
  return (
    <div className="App">
      <div className='logo_container'>
        <img 
          src={logo}
          alt='logo task-app'
          className='logo_img' />
      </div>
      <div className='task_container'>
        <h1 className='task_title'>My Task</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
