<template>
    <div class="search-input">
        <el-input
            v-model="state.keyword"
            placeholder="搜索音乐、MV、歌单、用户"
            clearable
            @change="change"
        ></el-input>
    </div>
</template>

<script setup lang="ts">
import searchViewModel from '@/views/viewModel/SearchViewModel';

const state = reactive({
    keyword: '',
    searchResult: {},
    songs: [],
});
// const keyword = ref('');
// let result = reactive({});

const change = async (newVal: string) => {
    state.searchResult = await searchViewModel.keywordSearch({
        keywords: newVal,
    });
    console.log(
        'Rd ~ file: SearchInput.vue ~ line 27 ~ change ~ state.searchResult',
        state.searchResult
    );
    state.songs = state.searchResult?.result.songs;
    console.log('Rd ~ file: SearchInput.vue ~ line 28 ~ change ~ state.songs', state.songs);
};
</script>

<style lang="scss">
.search-input {
    @include whrem(220, 38);

    .el-input {
        height: 100%;
    }
}
</style>
