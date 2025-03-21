import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from '@/components/login';
import HelloWorld from '@/components/HelloWorld';
import A from '@/components/a';
import B from '@/components/b';
import C from '@/components/c';
import C2 from '@/components/c2';
import D from '@/components/d';
import E from '@/components/e';
import E2 from '@/components/e2';
import F from '@/components/f';
import G from '@/components/g';
import H from '@/components/h';
import I from '@/components/i';

Vue.use(ElementUI);
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/main',
            name: 'MainLayout',
            component: HelloWorld,
            children: [
                { path: '/a', name: 'PageA', component: A },
                { path: '/b', name: 'PageB', component: B },
                { path: '/c', name: 'MapList', component: C },
                { path: '/c/:id', name: 'MapDetail', component: C2 },
                { path: '/d', name: 'PageD', component: D },
                { path: '/e', name: 'RoleList', component: E },
                { path: '/role/:id', name: 'RoleDetail', component: E2 },
                { path: '/all-roles', name: 'AllRoleDetails', component: E2 },
                { path: '/f', name: 'PageF', component: F },
                { path: '/g', name: 'PageG', component: G },
                { path: '/h', name: 'PageH', component: H },
                { path: '/i', name: 'PageI', component: I },
                { path: '', redirect: '/e' }
            ]
        }
    ]
});