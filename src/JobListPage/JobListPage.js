import React from 'react';
import JobListContainer from './JobListContainer/JobListContainer'
import UseFetchJobs from '../hooks/use-fetch-jobs';
import { useDispatch } from 'react-redux';
import { jobInfoActions } from '../store/jobState';
import classes from './JobListPage.module.css'

const JobList = ({mySetData}) => {    
    const dispatch = useDispatch();

    UseFetchJobs((data) => {
        dispatch(jobInfoActions.setJobs(data));
    })

    return (
        <div className='md:max-h-max bg-mainColor'>
            <JobListContainer mySetData={mySetData}/>
        </div>
    )
}

export default JobList;
