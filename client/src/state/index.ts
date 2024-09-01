import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import exp from "constants";

export interface IntialStateTypes {
    isSlidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: IntialStateTypes = {
    isSlidebarCollapsed: false,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSliderbarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSlidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const {setIsSliderbarCollapsed, setIsDarkMode} = globalSlice.actions;

export default globalSlice.reducer;