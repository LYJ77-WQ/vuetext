<template>
    <div class="shuzubianhuazhence">
        <hr>
        <h3>数组变化侦测</h3>
        <button @click="addData">添加数据</button>
        <!--数组的变更方法：push()、pop()、shift()、unshift()、splice()、sort()、reverse()改变原数组，数组变化，页面ui也会发生变化-->
        <!--替换数组：filter,map,concat,slice(不改变原数组，会生成新数组，数组变化，页面ui不会变化      )-->
        <ul>
            <li v-for="(value, index) in names">{{value}}</li>
        </ul>

        <button @click="hebingshuzu">合并数组</button>
        <h1>数组1</h1>
        <p v-for="(value,index) in arr1" :key="index">{{ value }}</p>
        <h1>数组2</h1>
        <p v-for="(value,index) in arr2" :key="index">{{ value }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ['张三', '李四', '王五'],
            arr1:[1,2,3],
            arr2:[4,5,6]
        }
    },
    methods: {
        addData() {
            this.names = this.names.concat(['小陆']);
            console.log(this.names.concat(['小陆']));
        },
        hebingshuzu() {
            // this.arr1 = this.arr1.concat(this.arr2);
            this.arr1 = [...this.arr1,...this.arr2];
            
        }
    }
}

</script>

<style scoped>
.shuzubianhuazhence {
    color: brown;
}

</style>