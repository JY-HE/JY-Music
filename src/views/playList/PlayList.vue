<template>
    <div class="play-list-view">
        <div class="play-list-info">
            <ListInfo :songListDetail="state.songListDetail"></ListInfo>
        </div>
        <div class="play-list-songs">
            <div class="play-list-songs-left">
                <SongsList :allSongs="state.allSongs" :pageIndex="currentPage"></SongsList>
                <Pagination
                    :total="total"
                    :pageSize="10"
                    @currentChange="currentChange"
                ></Pagination>
            </div>
            <div class="play-list-songs-right">
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

const route = useRoute();
const initStore: any = InitStore();

const total = ref(0);
const currentPage = ref(1);

const state = reactive<PlayListState>({
    songListId: '',
    songListDetail: {},
    allSongs: [],
});

// 获取路由参数
state.songListId = route.query.id || '';

onMounted(() => {
    getSongListDetail();
    getAllSongs();
});

// 获取歌单详情
const getSongListDetail = async () => {
    state.songListDetail = await SongsViewModel.getPlaylistDetail({
        id: state.songListId,
    });
    total.value = state.songListDetail?.trackIds?.length || 0;
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

// 切换页码
const currentChange = async (page: number) => {
    state.allSongs = await SongsViewModel.getPlaylistAll({
        id: state.songListId,
        limit: 10,
        offset: (page - 1) * 10,
    });
    currentPage.value = page;
};
</script>

<style lang="scss">
.play-list-view {
    width: 100%;
    @include flexCenter(false, center, true);

    .play-list-info {
        @include whrem(1200, 270);
        margin-bottom: pxToRem(32);
    }

    .play-list-songs {
        width: pxToRem(1200);
        @include flexCenter(flex-start, flex-start);

        &-left {
            width: pxToRem(888);
            @include flexCenter(center, center, true);

            .songs-list-view {
                height: pxToRem(548);
            }

            .pagination-view {
                @include whrem(100%, 50);
                @include flexCenter;
                margin: pxToRem(20) 0;
            }
        }

        .play-list-songs-right {
            flex: 1;
            margin-left: pxToRem(32);
            height: pxToRem(548);
            overflow: auto;

            span {
                font-weight: 600;
            }

            .desc {
                text-align: justify;
                text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
                // text-align-last: justify; // 最后一行也是两端对齐
            }
        }
    }
}
</style>
