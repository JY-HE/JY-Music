<template>
    <div class="list-info-view">
        <div class="list-info-view-left">
            <div class="list-info-img">
                <img :src="songListDetail.coverImgUrl" alt="" />
            </div>
        </div>
        <div class="list-info-view-right">
            <div class="list-info-msg">
                <div class="list-info-msg-name">{{ songListDetail.name }}</div>
                <div class="list-info-msg-user">歌手</div>
                <div class="list-info-msg-tag">
                    标签：
                    <span v-for="tag in songListDetail.tags">{{ tag }}&nbsp;&nbsp;</span>
                </div>
                <div class="list-info-msg-playCount">播放量：{{ songListDetail.playCount }}</div>
                <div class="list-info-msg-subscribedCount">
                    收藏量：{{ songListDetail.subscribedCount }}
                </div>
            </div>
            <div class="list-info-button">
                <button class="list-info-button-playAll">播放全部</button>
                <button class="list-info-button-subscribed">收藏</button>
                <button class="list-info-button-comment">评论</button>
                <button class="list-info-button-more">更多</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    songListDetail: { type: Object, default: () => ({}) },
});
</script>

<style lang="scss">
.list-info-view {
    @include wh;
    @include flexCenter(space-between);
    padding: 0;

    &-left {
        @include whrem(250, 100%);
        .list-info-img {
            @include whrem(250);
            img {
                @include wh;
            }
        }
    }

    &-right {
        flex: 1;
        height: 100%;
        padding: pxToRem(16) 0 0 pxToRem(32);
        border: 1px solid #fff;

        .list-info-msg {
            margin-bottom: pxToRem(32);
            &-name {
                font-size: pxToRem(26);
                font-weight: 500;
            }

            &-user,
            &-tag,
            &-playCount,
            &-subscribedCount {
                line-height: pxToRem(32);
                font-size: pxToRem(14);
            }
        }

        .list-info-button {
            button {
                @include whrem(122, 38);
                border: none;
                background: rgba(var(--theme-background-color), 1);
                color: rgba(var(--font-base-color), 1);
                margin-right: pxToRem(16);
                font-size: pxToRem(14);
                @include cursor;
                border-radius: pxToRem(5);
                border: pxToRem(1) solid rgb(175, 173, 173);
                &:hover {
                    background: rgb(236, 234, 234);
                }
            }
            &-playAll {
                background: rgba(var(--theme-color), 1) !important;
                color: rgba(var(--theme-background-color), 1) !important;
                border: none !important;
                &:hover {
                    background: rgb(46, 172, 111) !important;
                }
            }
        }
    }
}
</style>
