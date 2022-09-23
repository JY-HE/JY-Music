<template>
    <div class="play-list-view">
        <div class="play-list-info">
            <ListInfo :songListDetail="state.songListDetail"></ListInfo>
        </div>
        <div class="play-list-songs">
            <SongsList :allSongs="state.allSongs"></SongsList>
            <div class="play-list-description">
                <span>简介<br /></span>
                <div class="desc">
                    {{ state.songListDetail.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SongsViewModel from '@/views/viewModel/SongsViewModel';
import { useRoute } from 'vue-router';
import { InitStore } from '@/store/initStore';
import ListInfo from './components/ListInfo.vue';
import SongsList from './components/SongsList.vue';
import { PlayListState } from './types/init';

const router = useRoute();
const initStore: any = InitStore();

const state = reactive<PlayListState>({
    songListId: '',
    songListDetail: {},
    allSongs: [],
});

// 获取路由参数
state.songListId = router.query.id || '';

onMounted(() => {
    getSongListDetail();
    getAllSongs();
});

// 获取歌单详情
const getSongListDetail = async () => {
    state.songListDetail = await SongsViewModel.getPlaylistDetail({
        id: state.songListId,
    });
    // 将歌单详情存入pinia
    initStore.setSongListDetail(state.songListDetail);
};

// 获取歌单前10首歌曲
const getAllSongs = async () => {
    // 获取歌单前10首歌曲
    state.allSongs = await SongsViewModel.getPlaylistAll({
        id: state.songListId,
        limit: 10,
        offset: 0,
    });
    // 将歌曲存入pinia
    initStore.setSongList(state.allSongs);
};
</script>

<style lang="scss">
.play-list-view {
    @include wh;
    @include flexCenter(false, center, true);
    background: rgb(248, 247, 247);

    .play-list-info {
        @include whrem(1200, 270);
        margin-bottom: pxToRem(32);
    }

    .play-list-songs {
        @include whrem(1200, 700);
        @include flexCenter(flex-start, flex-start);

        .songs-list-view {
            @include whrem(888, 50);
        }

        .play-list-description {
            flex: 1;
            height: auto;
            margin-left: pxToRem(32);

            span {
                font-weight: 600;
            }

            .desc {
                width: 100%;
                height: auto;
                text-align: justify;
                text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
                // text-align-last: justify; // 最后一行也是两端对齐
            }
        }
    }
}
</style>
