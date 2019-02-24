import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Student from '@/components/Student'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/student',
            name: 'Student',
            component: Student
        },
        {
            path: '/person',
            name: 'Person',
            component: Person
        },
    ]
})