import { createSlice } from '@reduxjs/toolkit'

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState: {value: 'dark'},
    reducers: {
        setCurrentTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCurrentTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;