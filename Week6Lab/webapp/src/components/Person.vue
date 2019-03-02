<template>
    <div>
        <h1 class="section-heading" style="text-align:center">Person Information</h1>
        <h2 class="section">Person List</h2>

        <table align="center">
            <thead>
                <tr>
                    <th style="text-align:center">First Name</th>
                    <th style="text-align:center">Mid. Initial</th>
                    <th style="text-align:center">Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons" :key="person.personTabId">
                    <td>{{ person.firstName }}</td>
                    <td>{{ person.midInitial }}</td>
                    <td>{{ person.lastName }}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Person',
        data(){
            return{
                persons: []
            }
        },
         methods:{
            getPersons: function(){
                let personsApi = process.env.PERSON_API;

                Vue.axios.get(personsApi).then(
                    (response) => {
                        console.log(response)
                        this.persons = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            }
        },
        mounted(){
            this.getPersons();
        }
    }  
</script>

<style scoped>
.section-heading {
    background-color: lightskyblue;
}

.section {
    background-color: wheat;
}
</style>