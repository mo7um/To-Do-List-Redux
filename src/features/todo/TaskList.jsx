import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskStatus } from './todoSlice';
import './styles/TaskList.css';


function TaskList() {

    const tasks = useSelector((state) => {
        if (state.todos.filter === 'completed') {
            return state.todos.tasks.filter((task) => task.completed);
        } else if (state.todos.filter === 'incomplete') {
            return state.todos.tasks.filter((task) => !task.completed);
        }
        return state.todos.tasks;
    });

    const dispatch = useDispatch();

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                        onClick={() => dispatch(toggleTaskStatus(task.id))}
                        className="task-text"
                    >
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(removeTask(task.id))} className="delete-button">
                        delete
                    </button>
                    {/* Кнопка для удаления задачи */}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
