<template>
    <div class="play-box-view">
        <div class="state-btn">
            <a href="" class="prev">
                <i class="iconfont icon-shangyishou"></i>
            </a>
            <a href="" :class="['stop', 'play']">
                <i class="iconfont icon-24gf-pause2"></i>
            </a>
            <a href="" class="next">
                <i class="iconfont icon-xiayishou"></i>
            </a>
        </div>
        <div class="speed-box"></div>
        <div class="other-btn">
            <a
                href="javascript:void(0)"
                class="play-way"
                @click="playWay"
                :title="playWayInfo[state.palyWayIndex]"
            >
                <i :class="['iconfont', playWayMap.get(state.palyWayIndex)]"></i>
            </a>
            <a href="javascript:void(0)" class="collect" @click="handlerCollect">
                <i :class="['iconfont', state.collect ? 'icon-xihuan' : 'icon-xihuan1']"></i>
            </a>
            <a href="" class="download">
                <i class="iconfont icon-xiazai"></i>
            </a>
            <a href="" class="discuss">
                <i class="iconfont icon-pinglun"></i>
            </a>
            <div class="model" @click="handlerModel">
                <p :style="{ order: state.modelOrder ? 2 : 1 }">纯净</p>
                <p class="onOrOff" :style="{ order: 1 }">{{ state.modelOrder ? 'on' : 'off' }}</p>
            </div>
            <div class="voice">
                <i class="iconfont icon-shengyin"></i>
                <el-slider v-model="state.voiceValue" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const state = reactive({
    palyWayIndex: 0,
    modelOrder: false,
    voiceValue: 10,
    collect: false,
});

const playWayMap = computed(() => {
    return new Map([
        [0, 'icon-24gl-repeat2'],
        [1, 'icon-suijibofang'],
        [2, 'icon-shunxubofang'],
    ]);
});

const playWayInfo = computed(() => {
    return ['列表播放', '随机播放', '顺序播放'];
});

// 切换播放模式
const playWay = () => {
    state.palyWayIndex += 1;
    if (state.palyWayIndex > 2) {
        state.palyWayIndex = 0;
    }
};

// 收藏歌曲
const handlerCollect = () => {
    state.collect = !state.collect;
};

// 打开纯净模式
const handlerModel = () => {
    state.modelOrder = !state.modelOrder;
};
</script>

<style lang="scss">
.play-box-view {
    @include whrem(100%, 100);
    @include flexCenter(space-between, center);

    a {
        @include whrem(32);
        color: #e6e6e6;

        &:hover {
            color: #fff;
        }
        i {
            font-size: pxToRem(32);
        }
    }

    .collect {
        .icon-xihuan {
            color: red;
        }
    }

    .state-btn {
        @include whrem(200, 100%);
        @include flexCenter(space-between, center);
    }

    .speed-box {
        @include whrem(920, 100%);
        @include flexCenter;
        background-color: aqua;
    }

    .other-btn {
        @include whrem(500, 100%);
        @include flexCenter(space-around, center);

        .model {
            @include whrem(84, 32);
            border: pxToRem(1) solid #e6e6e6;
            border-radius: pxToRem(30);
            @include flexCenter(space-evenly);
            @include cursor;

            p {
                display: inline-block;
                color: #fff;
            }

            .onOrOff {
                @include whrem(26);
                background: #e6e6e6;
                border-radius: 50%;
                @include flexCenter;
                font-size: pxToRem(14);
            }
        }

        .voice {
            @include whrem(200, 32);
            color: #e6e6e6;
            @include flexCenter;

            i {
                font-size: pxToRem(32);
            }

            .el-slider {
                flex: 1;
                margin: 0 pxToRem(10);
            }
        }
    }
}
</style>
