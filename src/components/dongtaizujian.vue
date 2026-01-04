<template>
    <div class="dongtaizujian">
        <hr>
        <h3>动态组件</h3>
        <component :is="tabComponent"></component>
        <button @click="change">切换组件</button>
        <component :is="isCompontentA ? 'ComponentA' : 'ComponentB'"></component>
        <button @click="change2">切换组件2</button>
    </div>
</template>

<script>
import ComponentA from '../pages/componentA.vue';
import ComponentB from '../pages/componentB.vue';

export default {
    name: '25dongtaizujian',
    data() {
        return {
            tabComponent: 'ComponentA',
            isCompontentA: true,
        }
    },
    components: {
        ComponentA,
        ComponentB,
    },
    methods: {
        change() {
            this.tabComponent = this.tabComponent === 'ComponentA' ? 'ComponentB' : 'ComponentA';
        },
        change2() {
            this.isCompontentA = !this.isCompontentA;
        }
    }
}
</script>

<style scoped>
.dongtaizujian {
     color: blueviolet;   
}
</style>