<template>
    <input 
        class="find-input" 
        placeholder="Find images" 
        :value="searchValue"
        @input="inputHandler"
    />
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        searchValue: {
            type: String
        }
    },

    methods: {
        inputHandler: _.debounce(function(event) {
            this.$emit('update:searchValue', event.target.value)
        }, 600)
    }
}
</script>

<style scoped>
    .find-input {
        border: 2px solid rebeccapurple;
        border-radius: 5px;
        height: 35px;
        width: calc(100% - 4px - 10px);
        max-width: 70vw;
        font-size: 18px;
        padding-left: 10px;
        outline: none;
    }
</style>