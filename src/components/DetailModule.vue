<template>
    <div class="detail-module">
        <div class="detail-module-title">
            <h2>{{ moduleTitle }}</h2>
        </div>
        <div class="detail-module-nav">
            <router-link
                :to="item.link"
                v-for="(item, index) in moduleNavList"
                :key="index"
                :class="['nav-item', state.currentIndex === index && 'active']"
                @click="navClick(index)"
            >
                {{ item.navName }}
            </router-link>
        </div>
        <div class="detail-module-carousel">
            <el-carousel indicator-position="outside" :autoplay="false">
                <el-carousel-item v-for="(list, index) in state.newPlayList" :key="index">
                    <div
                        v-for="item in list"
                        :key="item.id"
                        class="carousel-item-box"
                        @click="listItemClick(item.id)"
                    >
                        <div class="carousel-item-img">
                            <img :src="item.picUrl" alt="" v-if="item.picUrl" />
                            <img src="../assets/imgs/noSong.png" alt="" v-else />
                        </div>
                        <div class="carousel-item-name">
                            {{ item.name }}
                        </div>
                        <div class="carousel-item-playCount">播放量：{{ item.playCount }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import SongsViewModel from '@/views/viewModel/SongsViewModel';
import { InitStore } from '@/store/initStore';
import { useRouter } from 'vue-router';

const props = defineProps({
    moduleTitle: { type: String, default: '歌单推荐' },
    moduleNavList: {
        type: Array,
        default: () => [
            { navName: '为你推荐', link: '/index' },
            { navName: '官方歌单', link: '/singerList' },
            { navName: '情歌', link: '/album' },
            { navName: '网络歌曲', link: '/topList' },
            { navName: '经典', link: '/category' },
            { navName: 'KTV热歌', link: '' },
        ],
    },
    navActive: { type: Boolean, default: false },
    playList: {
        type: Array,
        default: () => [],
    },
});

const initStore = InitStore();
const router = useRouter();

const state = reactive({
    currentIndex: 0,
    newPlayList: [],
});

watch(
    () => props.playList,
    newVal => {
        if (newVal.length) {
            // 处理playList，每次轮播五张歌单
            state.newPlayList = handlerPlayList(5, newVal);
            console.log(
                'Rd ~ file: DetailModule.vue ~ line 58 ~ state.newPlayList',
                state.newPlayList
            );
        }
    },
    { deep: true }
);

const navClick = (index: number) => {
    state.currentIndex = index;
};

const handlerPlayList = (num: number, arr: Array<any>) => {
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, num));
    }
    return newArr;
};

// 歌单点击
const listItemClick = async (itemId: string) => {
    router.push({ path: '/playList', query: { id: `${itemId}` } });

    // // 获取歌单详情
    // const songListDetail = await SongsViewModel.getPlaylistDetail({
    //     id: itemId,
    // });
    // // 将歌单详情存入pinia
    // initStore.setSongListDetail(songListDetail);
    // // 获取歌单前10首歌曲
    // const allSongs = await SongsViewModel.getPlaylistAll({
    //     id: itemId,
    //     limit: 10,
    //     offset: 0,
    // });
    // // 将歌曲存入pinia
    // initStore.setSongList(allSongs);
};
</script>

<style lang="scss">
.detail-module {
    // @include whrem(100%, 400);
    width: 100%;
    background: linear-gradient(
        to bottom,
        rgba(var(--theme-color), 0.1),
        rgba(var(--theme-background-color), 1)
    );
    @include flexCenter(center, false, true);

    &-title {
        @include whrem(100%, 40);
        @include flexCenter;
        margin: pxToRem(32) 0 pxToRem(16) 0;

        h2 {
            @include whrem(180, 100%);
            line-height: pxToRem(40);
            text-align: justify;
            text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
            text-align-last: justify;
            font-size: pxToRem(32);
        }
    }

    &-nav {
        @include whrem(100%, 32);
        @include flexCenter(center, flex-start);

        a {
            color: rgba(var(--font-base-color), 1);
            margin: 0 pxToRem(24);

            &.active,
            &:hover {
                color: rgba(var(--theme-color), 1);
            }
        }
    }

    &-carousel {
        @include whrem(100%, 336);

        .el-carousel__item {
            @include flexCenter;

            .carousel-item-box {
                @include whrem(224, 332);
                @include flexCenter(flex-start, center, true);
                margin: 0 pxToRem(16);

                .carousel-item-img {
                    @include whrem(224);
                    @include cursor;
                    img {
                        @include wh;
                    }
                }

                .carousel-item-name {
                    width: 100%;
                    margin-top: pxToRem(16);
                    @include cursor;
                    &:hover {
                        color: rgba(var(--theme-color), 1);
                    }
                }

                .carousel-item-playCount {
                    width: 100%;
                    margin-top: pxToRem(10);
                    color: #ccc;
                }
            }
        }
    }
}
</style>
