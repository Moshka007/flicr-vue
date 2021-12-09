<template>
    <div  
        @scroll="scrollHandler" 
        class="photo-list" 
        v-if="!isLoading"
    >
        <photo-item  
            v-for="photo in photos"
            :imgUrl="photo.url_s"
            :tags="photo.tags"
            :id="photo.id"
            :key="photo.id"
        />
    </div>
    <my-loader v-else/>
    
</template>

<script>
import {mapState, mapActions} from 'vuex'
import PhotoItem from './PhotoItem.vue'
import MyLoader from './ui-components/MyLoader.vue'

export default {
  components: { PhotoItem, MyLoader },
    computed: {
        ...mapState({
            isLoading: state => state.isLoading,
        }),
    },

    props: {
        photos: {
            type: Array,
            required: true
        }
    },

    methods: {
        ...mapActions({
            fetchPhotos: 'fetchPhotos',
            lazyloadPhotos: 'lazyloadPhotos'
        }),

        scrollHandler(e) {
            if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
                this.lazyloadPhotos()
                console.log('rjsaksl')
            }
        }
    },

    mounted() {
        this.fetchPhotos()
    }
}
</script>

<style scoped>
    .photo-list {
        width: calc(100% + 30px);
        /* background: olive; */
        height: 92%;
        display: flex;
        flex-wrap: wrap;
        overflow-x: auto;
        overflow-y: scroll;
    }
</style>