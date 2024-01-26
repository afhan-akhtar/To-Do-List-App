<template>
    <div>
        <h1 class="text-center mt-5">User-List-App</h1>
        <div class="d-flex justify-content-center">
            <div class="col-md-6">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userList" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeUser(user)">Remove</button>
                    </td>

                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" @click="fetchAndAddUser">Add User</button>
    </div>
    </div>
        

    </div>

</template>

<script>
import { ref } from 'vue';
import {getUsers, addUser, deleteUser} from './userService';

export default{
    name: 'userList',
    setup(){
        const userList = ref ([]);

        const fetchUsers = async()=>{
            try{
                userList.value = await getUsers();
            } catch (error){
                console.error('Error fetching users:', error);
            }
        };

        const addNewUser = async ()=>{
            try{
                const newUser = {name:'New User'};
                const addedUser = await addUser(newUser);
                userList.value.push(addedUser);
            } catch (error){
                console.error('Error adding user:', error);
            }
        };

        const removeUser = async(user)=>{
            try{
                await deleteUser(user.id);
                const index = userList.value.findIndex((u)=>u.id===user.id);
                if (index!==-1){
                    userList.value.splice(index,1);

                } 
            } catch (error){
                    console.error('Error deleting user:', error);
                }
        };

        return{
            userList,
            fetchAndAddUser: async () => {
          await fetchUsers();
          await addNewUser();
        },
        removeUser,
        };

    },
};
</script>


  


  
  