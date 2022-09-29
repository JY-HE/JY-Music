<template>
    <div class="play-box-view">
        <div class="state-btn">
            <a href="javascript:void(0)" class="prev">
                <i class="iconfont icon-shangyishou"></i>
            </a>
            <a href="javascript:void(0)" @click="handlerSongState">
                <i
                    :class="['iconfont', state.songPause ? 'icon-24gf-pause2' : 'icon-24gf-play']"
                ></i>
            </a>
            <a href="javascript:void(0)" class="next">
                <i class="iconfont icon-xiayishou"></i>
            </a>
        </div>
        <div class="speed-box">
            <div class="speed-box__info">
                <div>
                    <span>{{ `${props.playSongInfo.name || ''} - ` }}</span>
                    <span v-for="user in props.playSongInfo.ar" :key="user.id"
                        >{{ user.name }}&nbsp;&nbsp;</span
                    >
                </div>
                <div>
                    <span>{{ formatSeconds(props.currentTime) }} / </span>
                    <span>{{ formatSeconds(props.duration) }}</span>
                </div>
            </div>
            <div class="speed-box__speed">
                <el-slider
                    v-model="state.speedValue"
                    :show-tooltip="false"
                    :max="props.duration"
                    :min="0"
                    @change="speedValueChange"
                />
            </div>
        </div>
        <div class="other-btn">
            <div class="play-way" @click="playWay" :title="playWayInfo[state.palyWayIndex]">
                <i :class="['iconfont', playWayMap.get(state.palyWayIndex)]"></i>
                <span class="single" v-if="state.palyWayIndex === 1">1</span>
            </div>
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
                <el-slider
                    v-model="state.voiceValue"
                    :show-tooltip="false"
                    :max="1"
                    :min="0"
                    :step="0.01"
                    @change="voiceValueChange"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatSeconds } from '@/utils/function';
const props = defineProps({
    playSongInfo: { type: Object, default: () => ({}) },
    duration: { type: Number, default: 0 },
    currentTime: { type: Number, default: 0 },
    songState: { type: Boolean, default: false },
});
const emit = defineEmits(['speedValue', 'handlerSongState', 'voiceValue', 'playWay']);

const state = reactive({
    palyWayIndex: 0,
    modelOrder: false,
    voiceValue: 1,
    speedValue: 0,
    collect: false,
    songPause: false,
});

const playWayMap = computed(() => {
    return new Map([
        [0, 'icon-24gl-repeat2'],
        [1, 'icon-24gl-repeat2'],
        [2, 'icon-suijibofang'],
        [3, 'icon-shunxubofang'],
    ]);
});

const playWayInfo = computed(() => {
    return ['列表播放', '单曲播放', '随机播放', '顺序播放'];
});

// 进度条
watch(
    () => props.currentTime,
    newVal => {
        state.speedValue = newVal;
    },
    { immediate: true }
);

// 歌曲开始播放或播放结束
watch(
    () => props.songState,
    newVal => {
        state.songPause = newVal;
    },
    { immediate: true }
);

// 播放或暂停
const handlerSongState = () => {
    state.songPause = !state.songPause;
    emit('handlerSongState', state.songPause);
};

// 切换播放模式
const playWay = () => {
    state.palyWayIndex += 1;
    if (state.palyWayIndex > 3) {
        state.palyWayIndex = 0;
    }
    emit('playWay', state.palyWayIndex);
};

// 收藏歌曲
const handlerCollect = () => {
    state.collect = !state.collect;
};

// 打开纯净模式
const handlerModel = () => {
    state.modelOrder = !state.modelOrder;
};

// 改变播放进度
const speedValueChange = (newVal: any) => {
    emit('speedValue', newVal);
};

// 改变音量
const voiceValueChange = (newVal: any) => {
    emit('voiceValue', newVal);
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
            transition: all 0.5s;
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
        @include flexCenter(center, center, true);
        color: #e6e6e6;

        &__info {
            @include whrem(100%, 32);
            @include flexCenter(space-between, center);
        }

        &__speed {
            width: 100%;
        }
    }

    .other-btn {
        @include whrem(500, 100%);
        @include flexCenter(space-around, center);

        .play-way {
            position: relative;
            @include whrem(32);
            color: #e6e6e6;
            @include cursor;

            i {
                font-size: pxToRem(32);
            }

            .single {
                @include position(absolute, top 50% left 50%);
                transform: translate(-50%, -50%);
            }
        }

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
