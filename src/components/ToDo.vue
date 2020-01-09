<template>
    <div class="to-do">
        <h1>ToDo App</h1>
        <ToDoForm button-text="Create task"
                  @taskAdded="addTask"/>
        <ul class="tasks-list">
            <TaskItem v-for="task in getTasks"
                      :key="task.description"
                      :taskItem="task"
                      @completedChanged="completeTask(task)"/>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoForm from '@/components/ToDoForm.vue';
import TaskItem from '@/components/TaskItem.vue';
import Task from '@/types/Task.ts';
import { Action, Getter } from 'vuex-class';

@Component({
    components: {
        ToDoForm,
        TaskItem,
    },
})
export default class ToDo extends Vue {
    @Action public addTask!: void;
    @Action public completeTask!: void;
    @Getter public getTasks!: Task[];
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
