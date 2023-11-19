<template>
    <div class="edit-todo-container">
        <h1>Edit Todo</h1>
        <form class="edit-todo-form">
            <div class="form-group">
                <label class="label">Title: </label>
                <input type="text" class="input-field" v-model="editedTodo.title">
            </div>
            <div class="form-group">
                <label class="label">Description: </label>
                <input type="text" class="input-field" v-model="editedTodo.description">
            </div>
            <div class="button-container">
                <button class="update-button" @click="updateTodo">Update</button>
                <button class="cancel-button" @click="cancelUpdate">Cancel</button>
            </div>
        </form>
    </div>
</template>
  
<script setup>
import { ref, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const sharedData = inject('sharedData');
const editedTodo = ref({ id: 0, title: '', description: '' })

onMounted(() => {
    const todoId = Number(router.currentRoute.value.params.id)
    const todoToEdit = sharedData.todos.find((todo) => todo.id === todoId);
    if (todoToEdit) {
        editedTodo.value = { ...todoToEdit };
    }
});

const updateTodo = () => {
    sharedData.updateTodo(editedTodo.value);
    router.push('/')
}

const cancelUpdate = () => {
    router.push('/')
}

</script>
<style scoped>
.edit-todo-container {
   max-width: 600px;
   margin: 0 auto;
   padding: 20px;
   margin-top: 1rem;
   background-color: #f0f0f0;
   border-radius: 8px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.edit-todo-container h1 {
   font-size: 24px;
   margin-bottom: 20px;
   color: #333;
}

.edit-todo-form {
   display: flex;
   flex-direction: column;
}

.form-group {
   margin-bottom: 15px;
}

.label {
   font-size: 16px;
   margin-bottom: 8px;
   color: #555;
}

.input-field {
   width: 100%;
   padding: 10px;
   font-size: 16px;
   border: 1px solid #ddd;
   border-radius: 4px;
}

.button-container {
   display: flex;
   justify-content: space-between;
}

.update-button,
.cancel-button {
   padding: 10px 20px;
   font-size: 16px;
   color: #fff;
   border: none;
   border-radius: 4px;
   cursor: pointer;
}

.update-button {
   background-color: #3498db;
}

.cancel-button {
   background-color: #e74c3c;
}

</style>
  