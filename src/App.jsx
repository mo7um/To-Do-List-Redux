import TaskInput from './features/todo/TaskInput';
import TaskList from './features/todo/TaskList';
import TaskFilter from './features/todo/TaskFilter';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>ToDo List</h1>
            <TaskList />
            <TaskFilter />
            <TaskInput />
        </div>
    );
}

export default App;