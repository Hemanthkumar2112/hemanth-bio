import { configureStore } from '@reduxjs/toolkit'
import ApplicationLanguageSlice from './ApplicationLanguageSlice'
import ThemeSlice from './ThemeSlice'
import InnerDimentionSlice from './InnerDimentionSlice'


export const store = configureStore({
    reducer: {
        applicationLanguage:ApplicationLanguageSlice,
        currentTheme: ThemeSlice,
        innerDimention: InnerDimentionSlice

    },
  })
