<template>
    <div class="songs-list-view">
        <SongListItem isHead> </SongListItem>
        <SongListItem
            v-for="(song, index) in (allSongs as Array<any>)"
            :key="song.id"
            :index="index + 1"
            :songInfo="song"
            @play="playSong"
        >
        </SongListItem>
    </div>
</template>

<script setup lang="ts">
import searchViewModel from '@/views/viewModel/SearchViewModel';
import { InitStore } from '@/store/initStore';

defineProps({
    allSongs: { type: Array, default: () => [] },
});

const initStore: any = InitStore();

// 播放歌曲
const playSong = async (songId: string) => {
    // 获取歌曲 url
    let songUrl = await searchViewModel.getSongUrl({
        id: songId,
    });
    initStore.setPlaySongUrl(songUrl);
};
</script>

<style lang="scss">
.songs-list-view {
    @include wh;
}
</style>
