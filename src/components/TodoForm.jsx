import React, { useState } from "react";


const TodoForm = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        onAdd({title, description});
        setTitle('');
        setDescription('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                required
                type="text"
                placeholder="Title"
                className="todo-input"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <input
                required
                type="text"
                placeholder="Description"
                className="todo-input"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
            <button type="submit" className="todo-button">
                Add Todo
            </button>
        </form>);
}
export default TodoForm;