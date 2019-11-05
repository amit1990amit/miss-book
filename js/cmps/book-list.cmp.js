'use strict'

import bookFilter from './book-filter.cmp.js'
import bookPreview from './book-preview.cmp.js' 
 
export default{
    name: 'bookList',
    props:['books'],
    template: `           
                <section class="book-list-container">
                    <div v-for="(currBook,idx) in books" >
                    <router-link :to="'/book/'+currBook.id">
                        <book-preview @click.native="sendBook(currBook.id)" class="book-card"  :key="currBook.id" v-bind:book="currBook"></book-preview>
                        </router-link>
                    </div>   
                </section>
    `,
    methods:{
        sendBook(bookId){
            console.log(bookId)
            this.$emit('selected',bookId)
        }
    },
    components: {
        bookFilter,
        bookPreview
    },
    created(){
        console.log(this.books)
    }
    
}

 



