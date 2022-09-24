<template>
    <div class="songs-list-view">
        <SongListItem isHead> </SongListItem>
        <SongListItem
            v-for="(song, index) in (allSongs as Array<any>)"
            :key="song.id"
            :index="index + 1"
            :songInfo="song"
        >
            <template v-slot:song-name-button>
                <slot name="name-button" :rowData="song">
                    <img
                        src="../../../assets/imgs/play.png"
                        alt=""
                        title="播放"
                        @click="playSong(song.id)"
                    />
                </slot>
            </template>
        </SongListItem>
    </div>
</template>

<script setup lang="ts">
import searchViewModel from '@/views/viewModel/SearchViewModel';
import { InitStore } from '@/store/initStore';
import { useRouter, useRoute, LocationQueryValue } from 'vue-router';

defineProps({
    allSongs: { type: Array, default: () => [] },
});

const router = useRouter();
const route = useRoute();
const initStore: any = InitStore();

// 播放歌曲
const playSong = async (songId: string) => {
    // 获取歌曲 url
    let songUrl = await searchViewModel.getSongUrl({
        id: songId,
    });
    initStore.setPlaySongUrl(songUrl);

    routerJump(route.query.id);
};

// 跳转播放页
const routerJump = (playListId: LocationQueryValue | LocationQueryValue[]) => {
    // resolve新窗口打开
    const newPage = router.resolve({
        path: '/player',
        query: {
            id: playListId,
        },
    });
    window.open(newPage.href, '_blank'); // 打开新的窗口(跳转路径，跳转类型)
};
</script>

<style lang="scss">
.songs-list-view {
    @include wh;

    .songs-list-item:nth-child(even) {
        background: rgba(var(--theme-color), 0.05);
    }
}
</style>
