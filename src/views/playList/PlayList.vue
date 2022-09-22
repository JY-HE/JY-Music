<template>
    <div class="play-list-view">12515152</div>
</template>

<script setup lang="ts">
import SongsViewModel from '@/views/viewModel/SongsViewModel';
import { useRoute } from 'vue-router';
import { InitStore } from '@/store/initStore';

const router = useRoute();
const initStore = InitStore();

// 获取路由参数
const songListId = router.query.id;
console.log('Rd ~ file: PlayList.vue ~ line 15 ~ router.query', router.query);
console.log('Rd ~ file: PlayList.vue ~ line 15 ~ songListId', songListId);

onMounted(() => {
    getSongListDetail();
    getAllSongs();
});

// 获取歌单详情
const getSongListDetail = async () => {
    const songListDetail = await SongsViewModel.getPlaylistDetail({
        id: songListId,
    });
    // 将歌单详情存入pinia
    initStore.setSongListDetail(songListDetail);
};

// 获取歌单前10首歌曲
const getAllSongs = async () => {
    // 获取歌单前10首歌曲
    const allSongs = await SongsViewModel.getPlaylistAll({
        id: songListId,
        limit: 10,
        offset: 0,
    });
    // 将歌曲存入pinia
    initStore.setSongList(allSongs);
};
</script>

<style lang="scss">
.play-list-view {
    @include wh;
    background: red;
}
</style>
