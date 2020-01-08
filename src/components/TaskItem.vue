<template>
    <li class="task">
        <input type="checkbox" :checked="taskItem.completed" @change="emitCheck">
        <p>{{ taskItem.description }}</p>
    </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Task from '@/types/Task';

@Component
export default class TaskItem extends Vue {
    @Prop(Object) public taskItem!: Task;

    public emitCheck(): void {
        this.$emit('completedChanged');
    }
}
</script>

<style lang="scss" scoped>
    .task {
        margin-bottom: 4px;
        display: flex;
        align-items: center;

        input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        p {
            margin: 0;
            font-size: 18px;
        }
    }
</style>
