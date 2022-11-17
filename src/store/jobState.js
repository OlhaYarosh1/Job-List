import { createSlice } from '@reduxjs/toolkit';

const jobInfo = createSlice({
    name: 'jobInfo',
    initialState: {
        jobs: null,
    },
    reducers: {
        setJobs(state, action) {
            state.jobs = action.payload;
        },
    }
});

export const jobInfoActions = jobInfo.actions;

export default jobInfo;
