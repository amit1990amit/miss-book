'use strict'
 

import bookApp from './cmps/book-app.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';
import welcome from './cmps/welcome.cmp.js';
import about from './cmps/about.cmp.js';
import head from './cmps/head.cmp.js';

const myRoutes = [

    {
        path: '/',
        component: welcome
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails 

    },
    {
        path: '/head',
        component: head 

    }  

]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;