import { createStore } from 'vuex'
import { fetchImages } from '../api/api'

export default createStore({
  state: {
    photos: [],
    bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
    isLoading: false,
    searchValue: '',
    page: 1,
    limit: 20
  },

  mutations: {
    setPhotos(state, photos) {
      state.photos = photos
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    setSearchValue(state, searchValue) {
      state.searchValue = searchValue
    },
    setPage(state, page) {
      state.page = page
    },
    setBookmarks(state, bookmarks) {
      state.bookmarks = bookmarks
    }
  },

  getters: {
    bookmarkCount(state) {
      return state.bookmarks.length
    }
  },

  actions: {
     async fetchPhotos({state, commit}) {
      try {
        commit('setPage', 1)
        commit('setIsLoading', true)
        const data = await fetchImages(state.searchValue, state.page, state.limit)
        commit('setPhotos', data.photos?.photo) 
      } catch (e) {
          console.log(e)
      } finally {
          commit('setIsLoading', false)
      }
    },

    async lazyloadPhotos({state, commit}) {
      try {
        commit('setPage', state.page + 1)
        const data = await fetchImages(state.searchValue, state.page, state.limit)
        commit('setPhotos', [...state.photos, ...data.photos?.photo]) 
      } catch (e) {
          console.log(e)
      }
    }
  },

  modules: {
  }
})
