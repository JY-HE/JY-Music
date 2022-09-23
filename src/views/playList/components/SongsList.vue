<template>
    <div class="songs-list-view">
        <SongListItem isHead> </SongListItem>
        <SongListItem
            v-for="(song, index) in allSongs"
            :key="song.id"
            :index="index + 1"
            :songName="song.name"
            :songAlbum="song.al.name"
            :songUsers="song.ar"
            :songTime="song.dt"
        >
        </SongListItem>
    </div>
</template>

<script setup lang="ts">
defineProps({
    allSongs: { type: Array, default: () => [] },
});
</script>

<style lang="scss">
.songs-list-view {
    @include wh;
}
</style>
