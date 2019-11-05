'use strict'

export default{
    name: 'BookPreview',
    props:['book'],
    template:`
            <div @click=""  class="flex column ">
                <h2>{{book.title}}</h2>
                <img class="card-img" :src="book.thumbnail" />
                <h4>authors: {{book.authors.join('')}}</h4>    
                <h4>subtitle: {{book.subtitle}}</h4>
                <h4>price: {{book.listPrice.amount}}</h4>
            </div>
    `,
}


// way to insert diffrent background img to each card with out using .css file
// :style="{ backgroundImage: 'url(' + book.thumbnail + ')' }"