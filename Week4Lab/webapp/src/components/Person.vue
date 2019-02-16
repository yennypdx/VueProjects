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
                <tr v-for="person in persons">
                    <td>{{ person.fname }}</td>
                    <td>{{ person.midInt }}</td>
                    <td>{{ person.lname }}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
    export default {
        name: 'Person',
        mounted(){
            this.persons = getPersons();
        },
        data(){
            return{
                persons: []
            }
        }
    }

    function getPersons(){
        return JSON.parse(testPersons).persons;
    }

    var testPersons = '{"persons": [{"fname": "Roger","midInt": "A","lname": "Smith"}, {"fname": "Mark","midInt": "J","lname": "Hamilton"}, {"fname": "Brandon","midInt": "H","lname": "Cartwright"}, {"fname": "Glen","midInt": "M","lname": "Sullivan"}, {"fname": "Catherine","midInt": "S","lname": "Peterson"}]}'
</script>

<style scoped>
.section-heading {
    background-color: lightskyblue;
}

.section {
    background-color: wheat;
}
</style>