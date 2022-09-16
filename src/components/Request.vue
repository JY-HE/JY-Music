<template>
    <div @click="requestRes">请求</div>
</template>

<script lang="ts" setup>
import singerViewModel from '@/views/viewModel/SingerViewModel';

let result = reactive({});

const requestRes = async () => {
    result = await singerViewModel.getSingerCategory({
        type: 1,
        area: 96,
        initial: 'b',
    });
    console.log('Rd ~ file: Request.vue ~ line 10 ~ requestRes ~ result', result);
};
</script>
