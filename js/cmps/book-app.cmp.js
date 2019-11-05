'use strict' 
 
import bookList from './book-list.cmp.js';
import bookPreview from'./book-preview.cmp.js';
import bookFilter from './book-filter.cmp.js';
import bookDetails from './book-details.cmp.js'
 

import {bookService} from '../services/book-service.js'; 
 
// v-if="isBookSelcted" @closeModal="closeModal"
 export default{
     name: 'bookApp',
     template: `                     
     <section>
         <book-filter  @filtered="setFilter"></book-filter>
         <book-list :books="booksToShow" @selected="selectBook"></book-list>
     </section>
    `,
    data() {  
        return {books: [],
        filterBy: null,
        }
    },
    methods:{
        closeModal(){
            this.isBookSelcted = false;
        },
        setFilter(filter){
            this.filterBy = filter
        }
    }, 
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;

            var regex = new RegExp(`${this.filterBy.name}`, 'i');

            return this.books.filter(book => 
                regex.test(book.title) && book.listPrice.amount >= this.filterBy.price
            )
        }
    },
    created() {
        bookService.getBooks()
            .then(books => {
                this.books = books
            })
    },
    components:{
        bookFilter,
        bookDetails,
        bookPreview,
        bookList
    }
 }



 


