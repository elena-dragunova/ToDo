<template>
    <form @submit.prevent="emitTask">
        <input type="text" placeholder="Enter task..." v-model="task">
        <button type="submit">{{ buttonText }}</button>
    </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ToDoForm extends Vue {

    @Prop({ type: String, default: 'Add task' }) readonly buttonText!: string;

    public task: string = '';

    public emitTask(): void {
        this.$emit('taskAdded', this.task);
        this.task = '';
    }
}
</script>

<style lang="scss" scoped>

</style>
