<template>
    <div class="search-box-view">
        <SearchInput @change="change" @focus="focus" @blur="blur"></SearchInput>
        <div class="songs-box" v-show="state.showSongsBox">
            <ul>
                <li
                    v-for="song in state.songs"
                    :key="song.id"
                    :title="song.name"
                    @click="songClick(song.id)"
                >
                    {{ song.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import searchViewModel from '@/views/viewModel/SearchViewModel';

const state = reactive({
    searchResult: {},
    songs: [
        { name: '武则天', id: '89351049' },
        { name: '武则天', id: '4664' },
        { name: '武则天', id: '124245' },
    ],
    showSongsBox: false,
});

const change = async (newVal: string) => {
    console.log('Rd ~ file: SearchBox.vue ~ line 16 ~ change ~ newVal', newVal);
    state.searchResult = await searchViewModel.keywordSearch({
        keywords: newVal,
    });
    console.log(
        'Rd ~ file: SearchBox.vue ~ line 20 ~ change ~ state.searchResult',
        state.searchResult
    );

    // state.songs = state.searchResult?.result.songs;
    // console.log('Rd ~ file: SearchInput.vue ~ line 28 ~ change ~ state.songs', state.songs);
};

const focus = () => {
    state.showSongsBox = true;
};

const blur = () => {
    setTimeout(() => {
        state.showSongsBox = false;
    }, 100);
};

const songClick = (songId: string) => {
    console.log('Rd ~ file: SearchBox.vue ~ line 52 ~ songClick ~ songId', songId);
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
}
</style>
