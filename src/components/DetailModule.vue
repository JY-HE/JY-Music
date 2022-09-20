<template>
    <div class="detail-module"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.detail-module {
    @include whrem(100%, 400);
    background: linear-gradient(
        to bottom,
        rgba(var(--theme-color), 0.1),
        rgba(var(--theme-background-color), 1)
    );
}
</style>
