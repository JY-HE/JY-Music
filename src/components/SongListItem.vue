<template>
    <div :class="['songs-list-item', isHead && 'songs-list-item-head']">
        <p class="songs-list-item-index">{{ index >= 0 ? index : '' }}</p>
        <p :class="['songs-list-item-songName',songActive && 'active']" :title="songName">
            <span>{{ isHead ? '歌曲' : songName }}</span>
        <div class="slot-button">
            <slot name="song-name-button"></slot>
        </div>
        </p>
        <p class="songs-list-item-songUser">
            <span v-if="isHead">歌手</span>
            <span v-else v-for="user in songUsers" :key="user.id">{{ user.name }}&nbsp;&nbsp;</span>
        </p>
        <p class="songs-list-item-songAlbum" :title="songAlbum.name">
            {{ isHead ? '专辑' : songAlbum.name }}
        </p>
        <p class="songs-list-item-songTime">{{ isHead ? '时长' : formatTime(songTime) }}</p>
    </div>
</template>

<script setup lang="ts">
import { formatTime } from '@/utils/function';
const props = defineProps({
    index: { type: Number, default: -1 },
    songInfo: { type: Object, default: () => ({}) },
    isHead: { type: Boolean, default: false },
    songActive: { type: Boolean, default: false },
});
const {
    name: songName = '',
    al: songAlbum = '',
    ar: songUsers = [],
    dt: songTime = 0,
} = props.songInfo;
</script>

<style lang="scss">
.songs-list-item,
.songs-list-item-head {
    @include whrem(100%, 50);
    @include flexCenter;
    font-size: pxToRem(14);

    p {
        height: 100%;
        line-height: pxToRem(50);
        @include textEllipsis;
    }

    &-index {
        display: inline-block;
        width: pxToRem(50);
        padding-left: pxToRem(10);
        color: rgba(var(--font-base-color), 0.7);
    }

    &-songName {
        flex: 1;
        @include cursor;
        @include flexCenter;
        padding-right: pxToRem(16);

        @include hover {
            color: rgba(var(--theme-color), 1);

            .slot-button {
                @include flexCenter;
            }

        }

        &.active{
            color: rgba(var(--theme-color),1);
        }

        span {
            flex: 1;
            @include textEllipsis;
        }

        .slot-button {
            display: none;
            width: fit-content;
            height: 100%;

            img {
                margin: 0 pxToRem(8);
                @include whrem(32);
            }
        }
    }

    &-songUser,
    &-songAlbum {
        display: inline-block;
        width: pxToRem(160);
        @include cursor;
        padding-right: pxToRem(16);

        &:hover {
            color: rgba(var(--theme-color), 1);
        }
    }

    &-songTime {
        display: inline-block;
        width: pxToRem(70);
        color: rgba(var(--font-base-color), 0.7);
    }
}

.songs-list-item-head {
    color: rgba(var(--font-base-color), 0.7);

    .songs-list-item-songName {
        cursor: default;

        @include hover {
            color: rgba(var(--font-base-color), 0.7);

            img {
                display: none;
            }
        }
    }

    .songs-list-item-songUser,
    .songs-list-item-songAlbum {
        cursor: default;

        &:hover {
            color: rgba(var(--font-base-color), 0.7);
        }
    }
}
</style>
