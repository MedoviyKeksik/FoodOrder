import { configureStore } from '@reduxjs/toolkit';
import localizerReducer from '../features/localizer/localizerSlice'

export const store = configureStore({
  reducer: {
    localizer: localizerReducer
  }
});
