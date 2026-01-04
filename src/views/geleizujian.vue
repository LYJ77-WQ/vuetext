<template>
    <div class="divlv" v-if="showContent">
        <h3 class="title">各类组件++++</h3>
        <nav class="navigation">
            <router-link to="/new" class="nav-link">跳转到new</router-link>
        </nav>
        <nav class="navigation">
            <router-link to="/new" class="nav-link">跳转到new</router-link>
        </nav>
        <hr>
        <Swiper></Swiper>
        <Elementbiaoan></Elementbiaoan>
    </div>
</template>

<script>
import Swiper from '../newcomponents/swiper.vue'
import Elementbiaoan from '../newcomponents/elementbiaoan.vue';
export default {
    name: 'sijian',
    components: {
        Swiper,
        Elementbiaoan
    },
    data() {
        return {
            showContent: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showContent = true;
        }, 0);
    }
}
</script>

<style scoped>
.divlv {
    position: relative;
    z-index: 10;
}

.title {
    color: #4e4;
    margin-bottom: 20px;
}

.navigation {
    margin: 20px 0;
    z-index: 1;
}

.nav-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>