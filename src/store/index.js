import jobState from './jobState';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        jobInfo: jobState.reducer,
    }
});

export default store;
