import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './features/manageTasks/taskSlice';
import tabReducer from './features/manageTasks/activeTabSlice';

export const store = configureStore({
    reducer: {
        taskList: taskReducer,
        activeTab: tabReducer,
        
    }
})