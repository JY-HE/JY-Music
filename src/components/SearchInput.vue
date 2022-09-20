<template>
    <div class="search-input">
        <el-input
            v-model="keyword"
            :placeholder="placeholder"
            clearable
            @change="change"
            @focus="focus"
            @blur="blur"
        ></el-input>
    </div>
</template>

<script setup lang="ts">
defineProps({
    placeholder: { type: String, default: '搜索音乐、MV、歌单、用户' },
    clearable: { type: Boolean, default: true },
});

const emit = defineEmits(['change', 'focus', 'blur']);

const keyword = ref('');

const change = (newVal: string) => {
    emit('change', newVal);
};
const focus = () => {
    emit('focus');
};
const blur = () => {
    emit('blur');
};
</script>

<style lang="scss">
.search-input {
    @include wh;
    .el-input {
        height: 100%;
    }
}
</style>
