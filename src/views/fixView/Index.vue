<template>
    <div class="index-view">
        <DetailModule :playList="state.recPlaylist"></DetailModule>
    </div>
</template>

<script lang="ts" setup>
import SongsViewModel from '@/views/viewModel/SongsViewModel';

const state = reactive({
    recPlaylist: [],
});

onMounted(async () => {
    // 获取推荐歌单
    state.recPlaylist = await SongsViewModel.getRecPlaylist({
        limit: 15,
    });
    console.log(
        'Rd ~ file: Index.vue ~ line 21 ~ onMounted ~  state.recPlaylist',
        state.recPlaylist
    );
});
</script>

<style lang="scss">
.index-view {
    flex: 1;
}
</style>
