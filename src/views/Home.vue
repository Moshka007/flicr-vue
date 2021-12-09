<template>
  <div class="home">
    <find-input 
      @update:searchValue="inputHandler"
      :searchValue="searchValue"
    />
    <photo-list v-if="photos?.length" :photos="photos"/>
    <no-photos-message v-else>
      <h3>No images here.</h3>
      <h3>Would you to try search for anything else?</h3>
    </no-photos-message>

  </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'
import PhotoList from '../components/PhotoList.vue'
import FindInput from '../components/ui-components/FindInput.vue'
import NoPhotosMessage from '../components/ui-components/NoPhotosMessage.vue'

export default {
  components: { FindInput, PhotoList, NoPhotosMessage },
  methods: {
    ...mapMutations({
      setSearchValue: 'setSearchValue'
    }),

    ...mapActions({
      fetchPhotos: 'fetchPhotos'
    }),

    inputHandler(value) {
      this.$store.commit('setSearchValue', value)
      this.fetchPhotos()

    }
  },

  computed: {
    ...mapState({
      searchValue: state => state.searchValue,
      photos: state => state.photos
    })
  }

}
</script>

<style scoped>
  .home {
    width: calc(100vw - 4vw - 3px);
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>
