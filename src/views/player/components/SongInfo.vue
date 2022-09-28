<template>
    <div class="song-info-view">
        <div class="song-info-pic">
            <img :src="state.picUrl" alt="" />
        </div>
        <div class="song-info-info">
            <p>歌曲名：{{ state.songName }}</p>
            <p>
                歌手：
                <span v-for="user in state.users" :key="user.id">{{ user.name }}&nbsp;&nbsp;</span>
            </p>
            <p>专辑：{{ state.songAlbum }}</p>
        </div>
        <div class="song-info-lyrics">
            <pre class="lyrics">{{ state.lyric }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    songDetail: { type: Object, default: () => ({}) },
    songLyric: { type: Object, default: () => ({}) },
});

const state = reactive({
    songName: '',
    users: [],
    songAlbum: '',
    picUrl: '',
    lyric: '',
});

watch(
    () => props.songDetail,
    newVal => {
        state.songName = newVal?.name;
        state.users = newVal?.ar;
        state.songAlbum = newVal?.al?.name;
        state.picUrl = newVal?.al?.picUrl;
    },
    { deep: true, immediate: true }
);

watch(
    () => props.songLyric,
    newVal => {
        state.lyric = newVal?.lyric;
    },
    { deep: true, immediate: true }
);
</script>

<style lang="scss">
.song-info-view {
    @include wh;
    @include flexCenter(flex-start, center, true);

    .song-info-pic {
        @include whrem(200);

        img {
            @include wh;
        }
    }

    .song-info-info {
        @include flexCenter(center, center, true);

        p {
            line-height: pxToRem(18);
            margin: pxToRem(8);
        }
    }

    .song-info-lyrics {
        width: pxToRem(350);
        flex: 1;
        overflow: hidden;

        .lyrics {
            @include wh;
            @include flexCenter(center, false);
        }
    }
}
</style>
