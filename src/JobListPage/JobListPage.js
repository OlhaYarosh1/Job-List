import React from 'react';
import JobListContainer from './JobListContainer/JobListContainer'
import UseFetchJobs from '../hooks/use-fetch-jobs';
import { useDispatch } from 'react-redux';
import { jobInfoActions } from '../store/jobState';

const JobList = () => {
    const dispatch = useDispatch();

UseFetchJobs((data) => {
    dispatch(jobInfoActions.setJobs(data));
})

    return (
        <div className='md:max-h-max sm:max-h-maxMobile'>
            <JobListContainer/>
        </div>
    )
}

export default JobList;
