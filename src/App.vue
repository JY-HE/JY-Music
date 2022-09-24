<template>
    <HeadView v-if="router.path !== '/player'"></HeadView>
    <router-view />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import HeadView from '@/views/fixView/Head.vue';

const router = useRoute();
</script>

<style lang="scss"></style>
