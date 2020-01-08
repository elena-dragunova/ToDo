<template>
    <div class="to-do">
        <h1>ToDo App</h1>
        <ToDoForm @taskAdded="addTask" button-text="Create task"/>
        <ul class="tasks-list">
            <li v-for="task in tasks">
                <input type="checkbox" :checked="task.completed">
                <p>{{ task.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoForm from '@/components/ToDoForm.vue';
import Task from '@/types/Task.ts';

@Component({
    components: {
        ToDoForm,
    },
})

export default class ToDo extends Vue {
    public tasks: Task[] = [
        { description: 'Make Coffee', completed: true },
        { description: 'Feed Dragons', completed: false },
    ];

    public addTask(description: string): void {
        this.tasks.push({ description, completed: false });
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

    li {
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
}
</style>
