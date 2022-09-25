<template>
    <div class="pagination-view">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            v-model="currentPage"
            @current-change="currentChange"
        />
    </div>
</template>

<script setup lang="ts">
defineProps({
    total: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
});
const emit = defineEmits(['currentChange', 'update:moduleValue']);

const currentPage = ref(1);

const currentChange = (page: number) => {
    emit('currentChange', page);
};
</script>

<style lang="scss">
.pagination-view {
    .el-pagination {
        &.is-background {
            .el-pager {
                .is-active {
                    background: rgba(var(--theme-color), 1) !important;
                }
            }
        }
    }
}
</style>
