<script setup>
import { ref } from 'vue';
import { AddressEdit, showToast } from 'vant';
import 'vant/lib/index.css';

const searchResult = ref([]);
const addressKey = ref(0); // 添加key用于强制重新渲染组件
const arealist = {
    province_list: {
        110000: "北京",
        120000: "天津",
        130000: "河北",
    },
    city_list: {
        110100: "北京市",
        120100: "天津市",
        130100: "石家庄市",
    },
    county_list: {
        110101: "东城区",
        120101: "和平区",
        130101: "长安区",
    }
};

const onSave = () => {
    showToast("保存成功");
};

const onDelete = () => {
    showToast("删除成功");
    // 通过改变key的值强制重新渲染组件，从而清空输入框内容
    addressKey.value += 1;
};

const onChangeDetail = (val) => {
    if (val) {
        searchResult.value = [
            {
                name: "三亚市",
                address: "三亚学院"
            }
        ]
    } else {
        searchResult.value = []
    };
};
</script>