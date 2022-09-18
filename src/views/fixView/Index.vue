<template>
    <div class="index-view">
        <DetailModule></DetailModule>
    </div>
</template>

<script lang="ts" setup>
import setThemeStyle from '@/utils/theme';

setTimeout(() => {
    setThemeStyle('fontColor', '#fff');
}, 3000);
</script>
<style lang="scss">
.index-view {
    flex: 1;
}
</style>
