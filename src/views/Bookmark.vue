<template>
  <div class="bookmark">
    <photo-list 
      :photos="bookmarks" 
      v-if="bookmarks.length"
    />
    <no-photos-message class="bookmark__message" v-else>
      <h3>No images here.</h3>
      <h3>Would you to try bookmark anything else?</h3>
    </no-photos-message>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NoPhotosMessage from '../components/ui-components/NoPhotosMessage.vue'
import PhotoList from '@/components/PhotoList'

  export default {
    components: {
      PhotoList,
      NoPhotosMessage
    },
  
    computed: {
      ...mapState({
        bookmarks: state => state.bookmarks
      })
    }
  }
</script>

<style scoped>
  .bookmark {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: calc(100vw - 4vw - 3px);
    height: 88vh;
  }
</style>
