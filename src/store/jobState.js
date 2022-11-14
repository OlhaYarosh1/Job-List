import { createSlice } from '@reduxjs/toolkit';

const jobInfo = createSlice({
    name: 'jobInfo',
    initialState: {
        jobTITLE: null,
        jobADDRESS: null,
        jobPICTURES: null,
    },
    reducers: {
        setJobTITLE(state, action) {
            state.jobTITLE = action.payload;
        },
        setJobADDRESS(state, action) {
            state.jobADDRESS = action.payload;
        },
        setJobPICTURES(state, action) {
            state.jobPICTURES = action.payload;
        },
    }
});

export const jobInfoActions = jobInfo.actions;

export default jobInfo;
