<template>
    <div class="personal-center-view">
        <div :class="['view-box', state.showSelectBox ? ' uparrow' : 'downarrow']">
            <div class="label" @click.stop="handlerSelectBox">个人中心</div>
            <div class="select__box" v-show="state.showSelectBox">
                <ui>
                    <li class="color-block">
                        <span>主题色</span>
                        <el-color-picker
                            v-model="state.color"
                            @change="colorPicker"
                            color-format="rgb"
                        />
                    </li>
                </ui>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import theme from '@/utils/theme';
import { InitStore } from '@/store/initStore';

const initStore = InitStore();
const state = reactive<{
    config: any;
    color: string;
    showSelectBox: Boolean;
}>({
    config: {},
    color: '',
    showSelectBox: false,
});

state.config = initStore.config;
state.color = `rgb(${state.config?.defaultTheme['theme-color']})`;

const colorPicker = (newColor: string) => {
    const colorNumber = newColor.match(/(?<=\().*(?=\))/g);
    theme.setThemeColor(colorNumber[0]);
    // 更改 pinia 中的配置项 theme-color
    initStore.setConfiguration('defaultTheme', 'theme-color', colorNumber[0]);
    // 解决取色板关闭时的BUG
    setTimeout(() => {
        state.showSelectBox = false;
    }, 500);
};

const handlerSelectBox = () => {
    state.showSelectBox = !state.showSelectBox;
};
</script>

<style lang="scss">
.personal-center-view {
    @include whrem(122, 38);
    color: rgba(var(--theme-background-color), 1);
    @include cursor;
    z-index: 100;

    .view-box,
    .uparrow,
    .downarrow {
        width: 100%;
        position: relative;

        .label {
            @include whrem(100%, 38);
            @include flexCenter;
            background: rgba(var(--theme-color), 1);
        }

        .select__box {
            background: rgba(var(--theme-background-color), 1);
            width: 100%;
            border: pxToRem(1) solid #ccc;
            color: rgba(var(--font-base-color), 1);
            margin-top: pxToRem(2);

            li {
                @include flexCenter;
                height: pxToRem(38);
                border-bottom: pxToRem(1) solid #ccc;
                &:hover {
                    background: rgba(var(--theme-color), 1);
                }
                &:last-child {
                    border-bottom: none;
                }
            }

            .color-block {
                @include flexCenter(space-around);
            }
        }
    }

    .uparrow {
        @include after {
            @include position(absolute, top pxToRem(18) right pxToRem(10));
            @include whrem(0);
            border-left: pxToRem(4) solid transparent;
            border-right: pxToRem(4) solid transparent;
            border-bottom: pxToRem(6) solid;
        }
    }

    .downarrow {
        @include after {
            @include position(absolute, top pxToRem(18) right pxToRem(10));
            @include whrem(0);
            border-left: pxToRem(4) solid transparent;
            border-right: pxToRem(4) solid transparent;
            border-top: pxToRem(6) solid;
        }
    }
}
</style>
