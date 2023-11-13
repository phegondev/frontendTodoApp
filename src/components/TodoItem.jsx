const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
        <div className="todo-item">
            <div className="todo-content">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
            <div className="todo-buttons">
                <button onClick={() => onDelete(todo.id)} className="todo-button delete">
                    Delete
                </button>
                <button onClick={() => onEdit(todo.id)} className="todo-button edit">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default TodoItem;