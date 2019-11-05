'use strict' 

export default{
    name: 'bookFilter',
    template: `
        <section>
            <section class="book-filter-container">
                <h2>Lets Filter</h2>
                <input type="text" placeholder="Search by Name" v-model="filterBy.name" />
                <input type="number" placeholder="Search by price" v-model.number="filterBy.price" />
            </section>
        </section>
    `,
    data(){
        return {
            filterBy: {
                price: '',
                name: ''
            }
        }
    },
    created() {
        console.log('filter');
        this.$emit('filtered', this.filterBy)
    }
}






