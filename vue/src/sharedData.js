import { reactive, provide } from "vue";

const sharedData = reactive({
    todos: [],

    addTodo(todo){
        this.todos.push(todo);
    },

    updateTodo(updateTodo){
        const index = this.todos.findIndex((todo) => todo.id === updateTodo.id);
        if(index !== -1){
            this.todos[index] = updateTodo;
        }
    },
    deleteTodo(id){
        const index = this.todos.findIndex((todo)=> todo.id.toString() === id.toString());
        if(index !== -1){
            this.todos.splice(index, 1);
        }
    }

});

const provideSharedData = () =>{
    provide('sharedData', sharedData);
}
export {provideSharedData};