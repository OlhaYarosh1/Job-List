import { createSlice } from '@reduxjs/toolkit';

const jobInfo = createSlice({
    name: 'jobInfo',
    initialState: {
        jobTITLE: null,
        jobADDRESS: null
    },
    reducers: {
        setJobTITLE(state, action) {
            state.jobTITLE = action.payload;
        },
        setJobADDRESS(state, action) {
            state.jobADDRESS = action.payload;
        }
    }
});

export const jobInfoActions = jobInfo.actions;

export default jobInfo;
