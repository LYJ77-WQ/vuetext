<template> 
    <div class="zuhexiangyingshi">
        <h3>组合式API--响应式</h3>
        <p>{{ msg }}</p>
        <p>{{ asas }}</p>
        <p>{{ state.ok ? "ok1" : "ok2" }}</p>
        <p>{{ msg.split('').reverse().join('') }}</p>
        <p>{{ state.rawHtml }}</p>
        <p>v-html="state.rawHtml"</p>
        <hr>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue' ;

const msg = ref('hello world') ;
const asas = ref(122222);

const state = reactive({
    ok: true,
    rawHtml: '<a href = "https://www.baidu.com">百度</a>'
});

</script>

<style scoped>
.zuhexiangyingshi {
    color: yellow;
}
</style>