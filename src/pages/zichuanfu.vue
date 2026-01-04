<template>
    <div class="zichuanfu">
        <h3>child</h3>
        <button @click="clickmsg1">click me</button>
    </div>
</template>

<script>
export default {
    name: 'zichuanfu',

    data() {
        return {
            msg: '这是子组件'
        }
    },  

    methods: {
        clickmsg1() {
            // console.log('clickmsg1');
            this.$emit('someEvent', this.msg);
        }
    }
}
</script>

<style scoped></style>