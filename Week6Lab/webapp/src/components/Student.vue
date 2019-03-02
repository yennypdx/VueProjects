<template>
    <div>
        <h1 class="section-heading" style="text-align:center">Student Information</h1>
        <h2 class="section">Student List</h2>

        <table align="center">
            <thead>
                <tr>
                    <th style="text-align:center">Student ID</th>
                    <th style="text-align:center">Email Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.studentTabId">
                    <td>{{ student.studentIDNum }}</td>
                    <td>{{ student.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Student',

        data(){
            return{
                students: []
            }
        },
        methods:{
            getStudents: function(){
                let studentsApi = process.env.STUDENT_API;

                Vue.axios.get(studentsApi).then(
                    (response) => {
                        console.log(response)
                        this.students = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            }
        },
        mounted(){
            this.getStudents();
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