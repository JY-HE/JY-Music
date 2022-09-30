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
            <ul ref="lyric" :style="{ transform: `translateY(-${state.translate}px)` }">
                <li
                    v-for="(lyric, index) in state.lyrics"
                    :key="index"
                    :class="state.lyricIndex === index ? 'lyricActive' : ''"
                >
                    {{ lyric[1] }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { songInfoState } from '../types/init';

const props = defineProps({
    songDetail: { type: Object, default: () => ({}) },
    songLyric: { type: Object, default: () => ({}) },
    currentTime: { type: Number, default: 0 },
});

const lyric = ref<HTMLElement | null>(null);

const state = reactive<songInfoState>({
    songName: '',
    users: [],
    songAlbum: '',
    picUrl: '',
    lyrics: [],
    time: '',
    lyricIndex: 0,
    translate: 0,
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
            // 去掉秒数的小数位并补上小时数
            let hms = `00:${item[0].match(/(?<=\[).*(?=\.)/g)}`;
            // 转为秒数
            item[0] = moment.duration(hms).as('seconds');
            return item;
        });
        // 删除最后一个NaN元素
        state.lyrics.pop();
        console.log(
            'Rd ~ file: SongInfo.vue ~ line 61 ~ state.lyrics=lyric?.map ~ state.lyrics',
            state.lyrics
        );
    },
    { deep: true }
);

watch(
    () => props.currentTime,
    newVal => {
        state.lyrics?.forEach((item, index) => {
            if (newVal >= item[0] && newVal < state.lyrics[index + 1][0]) {
                if (item[1]) {
                    state.lyricIndex = index;
                    // 歌词滚动的距离
                    state.translate = index * 30;
                }
                return;
            }
        });
    },
    { deep: true }
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
            transition: transform 0.1s ease-out 0s;

            li {
                color: #e6e6e6;
                font-size: pxToRem(14);
                line-height: pxToRem(32);

                &.lyricActive {
                    color: rgba(var(--theme-color));
                }
            }
        }
    }
}
</style>
