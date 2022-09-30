<template>
    <div class="button-list-view">
        <div class="button">
            <i class="iconfont icon-xihuan1"></i>
            <span>收藏</span>
        </div>
        <div class="button">
            <i class="iconfont icon-tianjia"></i>
            <span>添加到</span>
        </div>
        <div class="button">
            <i class="iconfont icon-xiazai"></i>
            <span>下载</span>
        </div>
        <div class="button">
            <i class="iconfont icon-shanchu"></i>
            <span>删除</span>
        </div>
        <div class="button">
            <i class="iconfont icon-qingkong"></i>
            <span>清空列表</span>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.button-list-view {
    @include wh;
    @include flexCenter(flex-start);

    .button {
        @include whrem(122, 38);
        border: pxToRem(1) solid rgba(var(--theme-background-color), 0.3);
        @include flexCenter;
        box-sizing: border-box;
        margin-right: pxToRem(8);
        color: rgba(var(--theme-background-color), 0.6);
        @include cursor;
        border-radius: pxToRem(5);

        &:hover {
            color: rgba(var(--theme-background-color), 1);
            border: pxToRem(1) solid rgba(var(--theme-background-color), 1);
        }

        i {
            font-size: pxToRem(18);
            margin-right: pxToRem(5);
        }
    }
}
</style>
