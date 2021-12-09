<template>
    <div class="card">
        <img :src='imgUrl' class="card__img">
        <link-button 
            class="bookmark-btn" 
            @click="bookmarkHandler" 
            v-if="$router.currentRoute.value.path === '/'"
        >
            Bookmark
        </link-button>

        <link-button 
            class="bookmark-btn" 
            @click="deleteHandler" 
            v-else
        >
            Delete
        </link-button>
        <p class="card__tags">{{tags.slice(-10)}}</p>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import LinkButton from './ui-components/LinkButton.vue'

export default {
  components: { LinkButton },
    props: {
        imgUrl: {
            type: String,
            required: true
        },
        tags: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },

    computed: {
        ...mapState({
            bookmarks: state => state.bookmarks
        }),
    },

    methods: {
        ...mapMutations({
            setBookmarks: 'setBookmarks'
        }),

        bookmarkHandler() {
            const findBookmark = this.bookmarks.find(el => el.id === this.id)

            if(!findBookmark) {
                const bookmark = {
                    id: this.id, 
                    url_s: this.imgUrl, 
                    tags: this.tags
                }
                const newBookmarks = [...this.bookmarks, bookmark];

                this.$store.commit('setBookmarks', newBookmarks)
                localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
            }
        },
         
        deleteHandler() {
            const newBookmarks = this.bookmarks.filter(el => el.id !== this.id)
            this.$store.commit('setBookmarks', newBookmarks)
            localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
        }
    }
}
</script>

<style scoped>
    .card {
        border: 2px solid rgba(0, 0, 0, 0.3);
        margin: 10px 15px;
        display: flex;
        flex-direction: column;
        height: 40vh;
        padding: 10px;
        min-height: 300px;

    }
    .card__img {
        max-width: 70vw;
        width: 300px;
        height: 300px;
    }
    .bookmark-btn {
        align-self: start;
        border: 1px solid rgba(0, 0, 0, 0.356);
        margin-top: 10px;
        width: 100px;
        height: 25px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.808);
        transition: 0.4s;
    }
    .bookmark-btn:hover {
        transform: scale(1.05);
    }
    .bookmark-btn:active {
        background: cornflowerblue;
    }
    .card__tags {
        font-size: 20px;
        font-weight: 600;
        margin-top: 10px;
        color: rgba(2, 2, 2, 0.384);
        border: 1px solid rgba(0, 0, 0, 0.356);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px;
    }
</style>