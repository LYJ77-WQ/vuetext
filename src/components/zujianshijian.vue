<template>
    <div class="zujianshijian">
        <hr>
        <h3>组件自定义事件</h3>
        <zichuanfu @someEvent="getmsg"></zichuanfu>
        <p>从子元素接到的数据：{{ message }}</p>
        <hr>
    </div>
</template>

<script>
import zichuanfu from '../pages/zichuanfu.vue';
export default {
    name: 'zujianshijian',

    data() {
        return {
            message: ''
        }
    },

    components:  {
        zichuanfu
    },
    methods: {
        getmsg(data) {
            console.log(data, '44444444444444');
            this.message = data;
            
         }
    }
}
</script>

<style scoped>
.zujianshijian {
    color: white;
}
</style>