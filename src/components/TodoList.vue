<template>
    <div class="todo-list">
        <h1>To-Do-List-App</h1>
        <div class="input-container">
            <input v-model = "newTask" placeholder="Add a new task">
            <button @click="addTask">Add Task</button>
        </div>
        <ul>
            <li v-for="(task,index) in tasks" :key="index">
                <span>{{ task }}</span>
                <button @click="removeTask(index)">Remove</button>
            </li>
        </ul>

    </div>

</template>

<script>
import { ref } from 'vue';
export default{
    name: 'TodoList',
    setup(){
        const newTask = ref("");
        const tasks = ref([]);

        const addTask = ()=>{
         if (!newTask.value) return;
         tasks.value.push(newTask.value);
         newTask.value = '';
        };

        const removeTask = (index)=>{
            tasks.value.splice(index,1);
        };

        return{
            newTask,
            tasks,
            addTask,
            removeTask,
        };

    },
};

</script>

<style scoped>
  .todo-list {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  
  li button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 3px 6px;
    cursor: pointer;
  }
  
  li button:hover {
    background-color: #bd2130;
  }
  </style>
  
  
