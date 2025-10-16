<template>
    <div class="mobanyufa">
            <H3>模板语法</H3>
            <p>{{ msg }}</p>
            <p>{{number + 100}}</p>
            <div>{{ lok ? "ok1" : "ok2" }}</div>

            <!-- {{}}代表的是v-text -->
            <!-- 要是显示出全部html代码，必须使用v-html -->
            <div>{{ rawHtml }}</div>
            <div v-html="rawHtml"></div>
    </div>
</template>

<script>
export default {
    name: "mobanyufa",
    data() {
        return {
            msg: "adadadadad",
            number: 1,
            ok: true,
            rawHtml: "<a href = 'https://www.baidu.com' >百度</a>"
        }
    },
}

</script>

<style scoped>

.mobanyufa {
    color: yellow;
}

</style>