<template>
    <div class="player-view">
        <div class="player-view-bg-mask"></div>
        <div class="player-view-bg" :style="style"></div>
        <div class="player-view-songs-box">
            <SongsList :allSongs="state.allSongs">
                <template v-slot:name-button="row">
                    <img
                        src="../../assets/imgs/play.png"
                        alt=""
                        title="播放"
                        @click="playSong(row.rowData.id)"
                    />
                </template>
            </SongsList>
            <div class="song-info">
                <SongInfo
                    :songDetail="initStore.playSongInfo[0]"
                    :songLyric="initStore.playSongLyric"
                ></SongInfo>
            </div>
        </div>
        <div class="player-view-play-box">
            <PlayBox></PlayBox>
        </div>

        <audio controls autoplay class="audio-box" ref="songAudio">
            <source :src="state.songUrl" />
        </audio>
    </div>
</template>

<script setup lang="ts">
import songsViewModel from '@/views/viewModel/SongsViewModel';
import searchViewModel from '@/views/viewModel/SearchViewModel';
import { InitStore } from '@/store/initStore';
import { useRoute } from 'vue-router';
import SongsList from '@/views/playList/components/SongsList.vue';
import PlayBox from './components/PlayBox.vue';
import SongInfo from './components/SongInfo.vue';

const route = useRoute();
const initStore: any = InitStore();
const songAudio = ref<HTMLAudioElement>();
const state = reactive({
    allSongs: [],
    songUrl: '',
});

onMounted(() => {
    playSong('');
    getAllSongs();
});

const style = computed(() => {
    return {
        display: 'block',
        'background-image': `url(${initStore.playSongInfo[0]?.al?.picUrl})`,
        'background-color': 'rgb(255, 255, 255)',
    };
});

// 此方法待改进
watch(
    () => initStore.playSongUrl,
    newVal => {
        console.log('Rd ~ file: SearchBox.vue ~ line 48 ~ newVal', newVal);
        state.songUrl = newVal;
        // ! 是 not null 的断言操作符，不执行运行时检查
        songAudio.value!.src = newVal;
    },
    { deep: true }
);

// 获取歌单所有歌曲
const getAllSongs = async () => {
    state.allSongs = await songsViewModel.getPlaylistAll({
        id: route.query.id,
    });
    console.log('Rd ~ file: Player.vue ~ line 38 ~ getAllSongs ~ state.allSongs', state.allSongs);
    // 将歌曲存入pinia
    // initStore.setSongList(state.allSongs);
};

// 播放歌曲
const playSong = async (songId: string) => {
    if (songId) {
        // 获取歌曲 url
        let songUrl = await searchViewModel.getSongUrl({
            id: songId,
        });
        initStore.setPlaySongUrl(songUrl);
        // 获取歌曲详情
        let songInfo = await songsViewModel.getSongInfo({
            ids: songId,
        });
        initStore.setPlaySongInfo(songInfo);
        // 获取歌词
        let songLyric = await songsViewModel.getSongLyric({
            id: songId,
        });
        console.log('Rd ~ file: Player.vue ~ line 100 ~ playSong ~ songLyric', songLyric);
        initStore.setPlaySongLyric(songLyric);
    }
    // 处理从歌单列表页进来
    else {
        state.songUrl = initStore.playSongUrl;
        songAudio.value!.src = state.songUrl;
    }
};
</script>

<style lang="scss">
.player-view {
    @include wh;
    position: relative;
    overflow: hidden;
    @include flexCenter(center, center, true);

    &-bg-mask,
    &-bg {
        @include position(absolute, top 0 left 0);
        @include wh;
        overflow: hidden;
        @include pointer();
    }

    &-bg-mask {
        background-color: rgba(0, 0, 0, 0.35);
        z-index: 2;
    }

    &-bg {
        display: none;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        filter: blur(65px);
        opacity: 0.6;
        transform: translateZ(0);
    }

    &-songs-box {
        @include whrem(90%, 666);
        z-index: 10;
        @include flexCenter;

        .songs-list-view {
            @include whrem(70%, 100%);
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }

            .songs-list-item {
                color: rgba(var(--theme-background-color), 1) !important;
            }
        }

        .song-info {
            @include whrem(30%, 100%);
        }

        img {
            @include whrem(32);
        }
    }

    &-play-box {
        @include whrem(90%, 100);
        margin-top: pxToRem(52);
        z-index: 10;
    }

    .audio-box {
        display: none;
    }
}
</style>
