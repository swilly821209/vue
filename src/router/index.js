import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld.vue';
import Page from '@/components/pages/page.vue';
import child from '@/components/pages/child.vue';
import child2 from '@/components/pages/child2.vue';
import child3 from '@/components/pages/child3.vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name: '首頁',
            path: '/index',
            component: Home
            
        },
        {
            name: '分頁',
            path: '/Page',
            component: Page,
            children: [
                {
                    name: '卡一',
                    path: '',
                    component: child
                    
                },
                {
                    name: '卡二',
                    path: 'child2',
                    component: child2
                    
                },
                {
                    name: '卡三',
                    path: 'child/:id',
                    component: child3
                    
                },

            ],
            
        },

    ],
});