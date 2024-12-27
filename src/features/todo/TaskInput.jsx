import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './todoSlice';
import './styles/TaskInput.css';

function TaskInput() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-input-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new task"
                className="task-input"
            />
            <button type="submit" className="task-button">
                add task
            </button>
        </form>
    );
}

export default TaskInput;