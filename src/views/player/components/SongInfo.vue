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
            <ul>
                <li v-for="(lyric, index) in state.lyrics" :key="index">
                    {{ lyric[1] }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { songInfoState } from '../types/init';
const props = defineProps({
    songDetail: { type: Object, default: () => ({}) },
    songLyric: { type: Object, default: () => ({}) },
});

const state = reactive<songInfoState>({
    songName: '',
    users: [],
    songAlbum: '',
    picUrl: '',
    lyrics: '',
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
        let lyric = newVal?.lyric.split('\n');
        state.lyrics = lyric?.map((item: any) => {
            item = item.split(']');
            let time = item[0].match(/(?<=\[).*/g);
            // console.log('Rd ~ file: SongInfo.vue ~ line 53 ~ time', time);
            item[0] = time?.[0] || '';
            return item;
        });
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
        color: #e6e6e6;
        font-size: pxToRem(14);
        p {
            line-height: pxToRem(18);
            margin: pxToRem(8);
        }
    }

    .song-info-lyrics {
        width: pxToRem(350);
        flex: 1;
        overflow: hidden;
        margin-top: pxToRem(16);

        ul {
            @include wh;
            @include flexCenter(false, center, true);
            margin: 0;
            padding: 0;
            li {
                color: #e6e6e6;
                font-size: pxToRem(14);
                line-height: pxToRem(32);
            }
        }
    }
}
</style>
