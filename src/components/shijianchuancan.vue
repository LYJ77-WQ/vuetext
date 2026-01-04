<template>
    <div class="shijianchuancan">
        <h3>事件传参</h3>
        <h4>内联事件处理器</h4> 
        <button @click="count1($event)">add 454</button>
        <p>Count is: {{ countNum }}</p>
        <button @click="newCount('Hello')">传递参数</button>
    </div>
</template>

<script>
export default {
    name: 'shijianchuancan',
    data() {
        return {
            countNum: 0
        }
    },
    methods: {
        count1(e) {
            console.log(e, '45454545455654564545');
            console.log(e.target, 'e.target.target.target');
            console.log(e.currentTarget, 'e.currentTarget.currentTarget.currentTarget');
            console.log(e.target.innerHTML, 'e.target.innerHTML.target.innerHTML.target.innerHTML');
            e.target.innerHTML = "添加添加" + this.countNum;
            this.countNum += 454;
        },

        newCount(msg) {
            console.log(msg, 'msgmsgmsgmsg')
        }
    }
}
</script>

<style scoped>
.shijianchuancan {
    color: royalblue;
}
</style>