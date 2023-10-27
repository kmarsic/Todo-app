import { createSlice } from "@reduxjs/toolkit";

function getTasks() {
    const localValue = localStorage.getItem("TASKS");
    return (localValue == null ? [] : JSON.parse(localValue));
}
const all = getTasks()



export const taskManager = createSlice({
    name:'taskManager',
    initialState: {
        allTasks: all,
        activeTasks: all.filter(task => task.completed === false),
        completedTasks: all.filter(task => task.completed === true)

    },
    reducers: {
        addTask(state, action) { 
            state.allTasks.push(action.payload)
            state.activeTasks = state.allTasks.filter(task => task.completed === false)
            state.completedTasks = state.allTasks.filter(task => task.completed === true)
        },
        
        removeTask(state,action) {
            state.allTasks = state.allTasks.filter(task => task.id != action.payload)
            state.activeTasks = state.allTasks.filter(task => task.completed === false)
            state.completedTasks = state.allTasks.filter(task => task.completed === true)
       },

        clearCompletedTasks(state) { 
            state.allTasks = state.allTasks.filter(task => task.completed === false)
            state.activeTasks = state.allTasks.filter(task => task.completed === false)
            state.completedTasks = state.allTasks.filter(task => task.completed === true)
        },

        toggleCompletedTasks(state, action) { 
            const { id, completed } = action.payload;
            state.allTasks = state.allTasks.map(task => task.id === id ? {...task, completed} : task)
            state.activeTasks = state.allTasks.filter(task => task.completed === false)
            state.completedTasks = state.allTasks.filter(task => task.completed === true)
        },
        modifyTasks(state, action) {
            const {activeTab, reorderedTodos} = action.payload;
            switch (activeTab) {
                case ("active"):
                    state.activeTasks = reorderedTodos
                    break;
                case ("all"):
                    state.allTasks = reorderedTodos
                    break;
                case ("completed"):
                    state.completedTasks = reorderedTodos
                    break;
            }
            
        }
    }
})

export const {addTask, removeTask, clearCompletedTasks, toggleCompletedTasks, modifyTasks} = taskManager.actions;

export const selectAllTasks = (state) => state.taskList.allTasks;
export const selectActiveTasks = (state) => state.taskList.activeTasks;
export const selectCompletedTasks = (state) => state.taskList.completedTasks;


export default taskManager.reducer;