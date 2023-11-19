<template>
    <div class="container">
        <h1>Todo List</h1>
        <!-- Todo Form -->
        <div class="todo-form">
            <label for="title">Title</label>
            <input type="text" v-model="newTodo.title">
            <label for="">Description</label>
            <textarea v-model="newTodo.description"></textarea>
            <button @click="addNewTodo">Add New Todo</button>
        </div>

        <!-- Display LIst OF TOdos -->
        <div v-if="todos.length" class="todo-list">
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
                <div>
                    <h3>{{ todo.title }}</h3>
                    <p>{{ todo.description }}</p>
                </div>
                <div class="todo-buttons">
                    <router-link :to="{ path: `/edit/${todo.id}` }" class="router-link"> Edit</router-link>
                    <button @click="deleteTodo(todo.id)" class="delete-button">Delete</button>
                </div>
            </div>
        </div>
        <div v-else>No Available Data</div>
    </div>
</template>
  

<script setup>
import { ref, inject } from 'vue';
const sharedData = inject('sharedData');

let todos = sharedData.todos;
const newTodo = ref({ title: '', description: "" });

const addNewTodo = () => {
    if (newTodo.value.title.trim()) {
        const todo = { id: Date.now(), ...newTodo.value }
        sharedData.addTodo(todo);
        newTodo.value = { title: '', description: '' }
    } else {
        alert("Title is required");
    }
}
const deleteTodo = (id) => {
    sharedData.deleteTodo(id);
}

</script>
  
<style scoped>
.container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}

h1 {
    color: #3498db;
    text-align: center;
}

.todo-form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
}

button {
    background-color: #2ecc71;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
}

.todo-list {
    border-top: 1px solid #ccc;
    margin-top: 20px;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.todo-buttons {
    display: flex;
    gap: 10px;
}

.router-link {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.delete-button {
    background-color: #e74c3c;
    color: #fff;
    padding: 8px 10px;
    border: none;
    cursor: pointer;
}

.edit-button {
    background-color: #3498db;
    color: #fff;
    padding: 8px 10px;
    border: none;
    cursor: pointer;
}













.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.todo-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
}

.router-link,
.delete-button {
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.router-link {
    background-color: #3498db;
    color: #fff;
}

.delete-button {
    background-color: #e74c3c;
    color: #fff;
}

.router-link:hover,
.delete-button:hover {
    filter: brightness(1.2);
}
</style>
  