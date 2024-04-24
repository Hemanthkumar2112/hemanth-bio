import { createSlice } from '@reduxjs/toolkit'

export const InnerDimentionSlice = createSlice({
    name: 'dimentions',
    initialState: {value:  {height: null, width: null}},
    reducers: {
        setInnerDimentions: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setInnerDimentions } = InnerDimentionSlice.actions;
export default InnerDimentionSlice.reducer;