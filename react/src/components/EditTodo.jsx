import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditTodo = ({currentTodo, onUpdate, onCancel}) => {

    const navigate = useNavigate();
    const [editedTodo, setEditedTodo] = useState(currentTodo || {title:'', description:''});

    // alert(JSON.stringify(editedTodo))

    const handleSave = () => {
        onUpdate(editedTodo);
        navigate('/');
    }
    const handleCancel = () => {
        onCancel();
        navigate('/');
    }

    return (
        <div className="edit-todo-container">
            <h2>Edit Todo</h2>
            <form onSubmit={handleSave}>
                <div className="edit-todo-form">
                    <label>Title:</label>
                    <input
                        required
                        type="text"
                        value={editedTodo.title}
                        onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
                    />
                    <label>Description:</label>
                    <textarea
                        required
                        value={editedTodo.description}
                        onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
                    />
                    <div className="edit-todo-buttons">
                        <button type="submit" className="save">Save</button>
                        <button className="cancel" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default EditTodo;