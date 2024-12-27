import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './todoSlice';
import './styles/TaskFilter.css'

function TaskFilter() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.todos.filter);

    return (
        <div className="task-filter">
            <button
                onClick={() => dispatch(setFilter('all'))}
                disabled={currentFilter === 'all'}
                className="filter-button"
            >
                All tasks
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                disabled={currentFilter === 'completed'}
                className="filter-button"
            >
                Complete
            </button>
            <button
                onClick={() => dispatch(setFilter('incomplete'))}
                disabled={currentFilter === 'incomplete'}
                className="filter-button"
            >
                Unfulfilled 
            </button>
        </div>
    );
}

export default TaskFilter;
