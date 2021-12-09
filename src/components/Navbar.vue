<template>
    <div class="navbar">
        <router-link to='/'>
            <link-button 
                class="link" 
                :class="{active: currentLocation === '/'}"
            >
                <img 
                    src='../assets/home.svg' 
                    class="link-icon" 
                >
            </link-button>
        </router-link>
        
        <router-link to='/bookmark'>
            <link-button 
                class="link" 
                :class="{active: currentLocation === '/bookmark'}"
            >
                <img 
                    src='../assets/bookmark.svg'  
                    class="link-icon" 
                >
                <div class="bookmark-count">{{this.bookmarkCount}}</div>
            </link-button>
        </router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LinkButton from './ui-components/LinkButton.vue'
import MyLoader from './ui-components/MyLoader.vue'

export default {
    components: {
        LinkButton,
        MyLoader
    },

    methods: {
        clickHandler(event) {
            event.target.classList.add('active')
        }
    },

    computed: {
        ...mapGetters({
            bookmarkCount: 'bookmarkCount'
        }),

        currentLocation() {
            return this.$router.currentRoute.value.path
        }
    }
}
</script>

<style scoped>
    .navbar {
        border-right: 3px solid rgba(0, 0, 0, 0.199);
        display: flex;
        flex-direction: column;
        min-width: 50px;
        width: 4vw;
        align-items: center;
        padding-top: 10px;
    }

    .bookmark-count {
        border-radius: 50%;
        width: 18px;
        height: 18px;
        border: 1px solid rebeccapurple;
        position: relative;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 60px;
        left: 30px;
        color: white;
        font-weight: 700;
        background: cornflowerblue;
    }


    .link-icon {
        width: 50px;
        height: 50px;
        padding: 5px 0;
    }

    .link {
        transition: 0.4s; /* Время эффекта */
    }
   .link:hover {
        transform: scale(1.2); /* Увеличиваем масштаб */
    }
    .link.active {
        transform: scale(1.4);
    }
</style>