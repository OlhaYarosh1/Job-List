import React from 'react'
import JobComponent from './JobComponent/JobComponent';
import { useSelector } from 'react-redux';
import PageBox from './PageBox/PageBox';

const JobListContainer = () => {
    const jobTITLE = useSelector(state => state.jobInfo.jobTITLE);
    const jobADDRESS = useSelector(state => state.jobInfo.jobADDRESS);

    console.log(jobTITLE, jobADDRESS)

    return (
        <div className='relative h-max max-w-component ml-side mr-side mt-top mb-bottom'>
            <JobComponent title={jobTITLE} address={jobADDRESS} />
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <JobComponent/>
            <PageBox/>
        </div>
    )
}

export default JobListContainer;
