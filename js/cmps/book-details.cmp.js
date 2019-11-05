'use strict'
 
import LongTxt from './text.cmp.js';
import {bookService} from '../services/book-service.js'; 

 
export default{
    template: `
        <div v-if="book" class="book-details-container">
            <img class="book-details-img" :src="book.thumbnail"/>

            <div class="book-details flex column align-center flex-space-around">
                <h2>{{book.title}}</h2>
                <h3>{{readingLength}}</h3>
                <text-desc :text="getDesc"></text-desc>
                <h3 :class="{expensive:book.listPrice.amount > 150, cheap:book.listPrice.amount < 20}">Price: {{book.listPrice.amount}}</h3>
                <h3>Authors: {{book.authors.join('')}}</h3>
                <h3>Published Year: {{book.publishedDate}}, <span>{{bookTimeType}}</span> </h3> 
                <!-- <button class="close-modal-btn" @click="closeModal">X</button> -->

            </div>
        </div>
    `,
    data(){
        return {
            book: null
        }
    },
    methods:{
        // closeModal(){
        //     this.$emit('closeModal')
        // },
    },
    computed: {
        getDesc() {
            return this.book.description
        },
        readingLength(){
            if(this.book.pageCount > 500) {
                return 'Long Reading';
            } else if(this.book.pageCount > 200 ){
                return 'Decent Reading';
            }
            return 'Light Reading'
        },
        bookTimeType(){
            if(this.book.publishedDate < 2009) return 'Veteran Book';
            else if(this.book.publishedDate > 2018) return 'New Book';
            else return '';
        }
    },
    created(){
        const bookId = this.$route.params.bookId;
        if (bookId) {
            bookService.findBook(bookId)
            .then(book=> {
                console.log(book)
                this.book = book
            })
        }
    }, 
    components: {
        LongTxt
    }
}
