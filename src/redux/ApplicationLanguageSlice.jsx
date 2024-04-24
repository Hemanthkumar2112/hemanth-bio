import { createSlice } from '@reduxjs/toolkit'

export const ApplicationLanguageSlice = createSlice({
    name: 'application language',
    initialState: {value:  'en'},
    reducers: {
        setApplicationLanguage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setApplicationLanguage } = ApplicationLanguageSlice.actions;
export default ApplicationLanguageSlice.reducer;