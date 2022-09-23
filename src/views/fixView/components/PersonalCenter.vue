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

const props = defineProps({
    initStore: { type: Object, default: () => ({}) },
});

const state = reactive<{
    color: string;
    showSelectBox: Boolean;
}>({
    color: '',
    showSelectBox: false,
});

const config = computed(() => {
    return props.initStore.config;
});

// 获取主题色
state.color = `rgb(${config.value?.defaultTheme['theme-color']})`;

const colorPicker = (newColor: string) => {
    // 提取数字
    const colorNumber = newColor.match(/(?<=\().*(?=\))/g);
    // 设置主题色
    theme.setThemeColor(colorNumber![0]); // ! 是 not null 的断言操作符，不执行运行时检查
    // 更改 pinia 中的配置项 theme-color
    props.initStore.setConfiguration('defaultTheme', 'theme-color', colorNumber![0]);
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
