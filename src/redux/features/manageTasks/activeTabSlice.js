import { createSlice } from "@reduxjs/toolkit";

export const tabManager = createSlice({
    name: "tabManager",
    initialState : {
        tab: "all"
    },
    reducers : {
        handleTabs(state, action) {
            state.tab = action.payload
        }
    }
})

export const {handleTabs} = tabManager.actions;

export const currentTab = (state) => state.activeTab.tab;

export default tabManager.reducer;