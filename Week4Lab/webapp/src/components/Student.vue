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
                <tr v-for="student in students">
                    <td>{{ student.id }}</td>
                    <td>{{ student.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        name: 'Student',
        mounted(){
            this.students = getStudents();
        },
        data(){
            return{
                students: []
            }
        }
    }

    function getStudents(){
        return JSON.parse(testStudents).students;
    }

    var testStudents = '{"students": [{"id": 95123654,"email": "roger.smith@oit.edu"}, {"id": 95131658,"email": "mark.hamilton@oit.edu"}, {"id": 95178549,"email": "brandon.cartwright@oit.edu"}, {"id": 95145625,"email": "glen.sullivan@oit.edu"}, {"id": 95133652,"email": "cat.peterson@oit.edu"}]}'
</script>

<style scoped>
.section-heading {
    background-color: lightskyblue;
}

.section {
    background-color: wheat;
}
</style>