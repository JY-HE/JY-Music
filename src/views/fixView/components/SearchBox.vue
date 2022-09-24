<template>
    <div class="search-box-view">
        <SearchInput @change="change" @focus="focus" @blur="blur"></SearchInput>
        <div class="songs-box" v-show="state.showSongsBox" v-loading="state.loading">
            <ul>
                <li
                    v-for="song in state.searchSongs"
                    :key="song.privilege.id"
                    :title="song.name"
                    @click="songClick(song.privilege.id)"
                >
                    {{ song.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import searchViewModel from '@/views/viewModel/SearchViewModel';
import { SearchBoxState } from '../types/init';

const props = defineProps({
    playSongUrl: { type: String, default: '' },
});

const songAudio = ref<HTMLAudioElement>();

const state = reactive<SearchBoxState>({
    hotSongs: [],
    searchSongs: [],
    showSongsBox: false,
    songUrl: '',
    loading: false,
});

onMounted(async () => {
    // 获取热搜列表
    state.hotSongs = await searchViewModel.getSongHot();
    console.log('Rd ~ file: SearchBox.vue ~ line 37 ~ onMounted ~ state.hotSongs', state.hotSongs);
});

const songsList = computed(() => {
    return state.searchSongs.length ? state.searchSongs : state.hotSongs;
});

// 关键词搜索
const change = async (newVal: string) => {
    state.loading = true;
    state.searchSongs = await searchViewModel.keywordSearch({
        keywords: newVal,
    });
    state.loading = false;
};

const focus = () => {
    state.showSongsBox = true;
};

const blur = () => {
    setTimeout(() => {
        state.showSongsBox = false;
    }, 100);
};

// 点击进入详情页
const songClick = async (songId: string) => {
    console.log('Rd ~ file: SearchBox.vue ~ line 68 ~ songClick ~ songId', songId);
};
</script>

<style lang="scss">
.search-box-view {
    width: pxToRem(220);
    margin-right: pxToRem(30);
    position: relative;
    z-index: 100;

    .search-input {
        @include whrem(100%, 38);
    }
    .songs-box {
        @include whrem(100%, 220);
        @include position(absolute, top pxToRem(40));
        border: pxToRem(1) solid #ccc;
        background: rgba(var(--theme-background-color), 1);

        ul {
            @include wh;
            overflow-y: auto;
            margin: 0;
            padding: 0;

            li {
                color: rgba(var(--font-base-color), 1);
                font-size: pxToRem(14);
                @include whrem(100%, 36);
                text-align: left;
                line-height: pxToRem(36);
                padding-left: pxToRem(10);
                @include textEllipsis;
                @include cursor;
                &:hover {
                    color: rgba(var(--theme-color), 1);
                }
            }
        }
    }
    .audio-box {
        position: absolute;
        top: 50px;
        left: 420px;
    }
}
</style>
