<template>
    <div class="to-do">
        <h1>ToDo App</h1>
        <ToDoForm button-text="Create task"
                  @taskAdded="addTask"/>
        <ul class="tasks-list">
            <TaskItem v-for="task in tasks"
                      :key="task.description"
                      :taskItem="task"
                      @completedChanged="completedChanged(task)"/>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoForm from '@/components/ToDoForm.vue';
import TaskItem from '@/components/TaskItem.vue';
import Task from '@/types/Task.ts';

@Component({
    components: {
        ToDoForm,
        TaskItem,
    },
})
export default class ToDo extends Vue {
    public tasks: Task[] = [];

    public addTask(description: string): void {
        this.tasks.push({ description, completed: false });
    };

    public completedChanged(task: Task): void {
        const ind = this.tasks.findIndex(item => {
            return item.description === task.description;
        });
        this.tasks[ind].completed = !this.tasks[ind].completed;
    };
}
</script>

<style lang="scss" scoped>
.to-do {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tasks-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
}
</style>
