<template> 
    <div class="zuhejisuanshuxing"></div>
    <h3>组合式API--响应式</h3>
    <p>{{ messagea }}</p>
    <p>{{ userInfo.name }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseUserInfoName }}</p>
    <hr>
</template>

<script setup> 
import { ref, reactive, computed } from 'vue';

const messagea = ref('hello world');
const userInfo = reactive({
  name: '张三',
  age: 18,
  sex: '男'
});

const reverseMessage = computed(() => {
  return messagea.value.split('').reverse().join('');
});

const reverseUserInfoName = computed(() => {
  return userInfo.name.split('').reverse().join('');
});

</script>

<style scoped>
.zuhejisuanshuxing {
  color: red;
}
</style>