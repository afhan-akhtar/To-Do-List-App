<template>
<TodoList />
<userList />
</template>

<script>
import TodoList from './components/TodoList.vue'
import userList from './components/userList.vue'

export default {
    name: 'App',
    components: {
        TodoList,
        userList,
    }
}
</script>
