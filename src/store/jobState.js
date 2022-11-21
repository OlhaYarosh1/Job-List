import { createSlice } from '@reduxjs/toolkit';

const jobInfo = createSlice({
    name: 'jobInfo',
    initialState: {
        jobs: null,
        pageNumber: 0
    },
    reducers: {
        setJobs(state, action) {
            state.jobs = action.payload;
        },
        setPageNumber(state, action) {
            state.pageNumber = action.payload;
        },
    }
});

export const jobInfoActions = jobInfo.actions;

export default jobInfo;
