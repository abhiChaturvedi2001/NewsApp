import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: "toggleHandling",
    initialState: {
        toggle: false,
    },
    reducers: {
        handleToggleTrue: (state) => {
            state.toggle = true;
        },
        handleToggleFalse: (state) => {
            state.toggle = false;
        },
    }
});

export const { handleToggleTrue, handleToggleFalse } = toggleSlice.actions

export default toggleSlice.reducer