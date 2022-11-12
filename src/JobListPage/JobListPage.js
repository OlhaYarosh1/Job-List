import React from 'react';
import JobListContainer from './JobListContainer/JobListContainer'
import UseFetchJobs from '../hooks/use-fetch-jobs';
import { batch, useDispatch } from 'react-redux';
import { jobInfoActions } from '../store/jobState';

const JobList = () => {
    const dispatch = useDispatch();

    const [jobTitle, jobAddress, jobPictures, jobLocation, jobDate] = UseFetchJobs();
    batch(() => {
        dispatch(jobInfoActions.setJobTITLE(jobTitle));
        dispatch(jobInfoActions.setJobADDRESS(jobAddress));
    })

    return (
        <JobListContainer/>
    )
}

export default JobList;
