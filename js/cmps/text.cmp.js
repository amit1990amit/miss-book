'use strict'

export default{
    name: 'LongText',
    props:['text'],
    template:`
        <div :class="{'long-text': isLongerThan100}">
        <div @click="toggleText">{{textDesc}}</div>
        </div>
    `,
    data() {
        return {
            textDesc: this.text,
            isLongerThan100: false
        }
    },
    methods: {
        toggleText() {
            this.textDesc = this.text;
        }
    },
    created(){
        if(this.text.length > 100) {
            this.textDesc = this.text.substring(0,100) + '...'
            this.isLongerThan100 = true;
        }
    }
}

