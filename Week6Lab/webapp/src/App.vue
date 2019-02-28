<template>
  <div id="app">
    <img src='./assets/oit.png' style="width:200px"><br>
    <span v-on:click='goToHome'>Home |</span>
    <span v-on:click='goToLogin'> Log in |</span>
    <span v-on:click='goToStudent'> Student |</span>
    <span v-on:click='goToPerson'> Person</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:
  {
    goToHome: function()
    {
      this.$router.push({path: 'home'})
    },
    goToLogin: function()
    {
      this.$router.push({path: 'login'})
    },
    goToStudent: function()
    {
      this.$router.push({path: 'student'})
    },
    goToPerson: function()
    {
      this.$router.push({path: 'person'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.section-heading {
    background-color: lightskyblue;
}

.section {
    background-color: wheat;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
