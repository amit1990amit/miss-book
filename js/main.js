'use strict'  

import bookApp from './cmps/book-app.cmp.js';
import myRouter from './routes.js';
import appHeader from './cmps/head.cmp.js'


new Vue ({
    router: myRouter,
    el: '#my-app',                      
    
    template: `
        <div>
            <app-header></app-header>
            <!-- <nav>
                <router-link to="/">Welcome</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/book">Books</router-link>
            </nav> -->
            <router-view></router-view>
        </div>
    `,
    created(){

    },
    components: {
        bookApp,
        appHeader
    }
})


Vue.config.devtools = true;























 
// import bookList from './cmps/book-list.cmp.js';
// import bookPreview from'./cmps/book-preview.cmp.js';
// import bookFilter from './cmps/book-filter.cmp.js';
// import bookDetails from './cmps/book-details.cmp.js'


// import {bookService} from './services/book-service.js';


// Vue.config.productionTip = false
 


// var options = {
//     el: '#my-app',
//     template:`
//         <div>
//             <book-filter @filtered="setFilter"></book-filter>
//             <book-list :books="booksToShow" @selected="selectBook"></book-list>
//             <book-details :book="selectedBook" v-if="isBookSelcted" @closeModal="closeModal"></book-details> 
            
//         </div>
//     `,
//     data: {
//         books: [],
//         filterBy: null,
//         selectedBook: null,
//         isBookSelcted: false
//     },
//     computed: {
//         booksToShow(){
//             if (!this.filterBy) return this.books;

//             var regex = new RegExp(`${this.filterBy.name}`, 'i');

//             return this.books.filter(book => 
//                 regex.test(book.title) && book.listPrice.amount >= this.filterBy.price
//             )
//         }
//     },
//     methods:{
//         selectBook(id){
//             console.log(id)
//             let book = bookService.findBook(id)
//             this.selectedBook = book; 
//             this.isBookSelcted = true;
        
//         },
//         closeModal(){
//             this.isBookSelcted = false;
//         },
//         setFilter(filter){
//             this.filterBy = filter
//         }
//     },
//     created() {
//         bookService.getBooks()
//             .then(books => {
//                 this.books = books
//             })
//     },
//     components:{
//         bookFilter,
//         bookDetails,
//         bookPreview,
//         bookList
//     }
// }


// new Vue(options);