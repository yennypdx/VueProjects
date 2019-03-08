import Vue from 'vue'
import Router from 'vue-router'
import Callback from '@/components/Callback'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Student from '@/components/Student'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/callback',
            component: Callback
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/student',
            component: Student
        },
        {
            path: '/person',
            component: Person
        }
    ]
})