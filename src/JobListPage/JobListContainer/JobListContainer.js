import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PageBox from '../PageBox/PageBox';
import JobPage from './JobPage/JobPage';

const JobListContainer = () => {

    const jobs = useSelector(state => state.jobInfo.jobs)

    const COUNT_PER_PAGE = 15;

    const [currentPage, setCurrentPage] = useState(0);

    const getJobsForPage = (pageIndex) => {
        const start = pageIndex * COUNT_PER_PAGE;
        const end = start + COUNT_PER_PAGE;
        if(!jobs) {
            return;
        }
        return jobs.slice(start, end);
    }
    const handlePageSelect = (selectedPage) => {
        setCurrentPage(selectedPage);
    }

    return (
        <div className='relative lg:max-w-component lg:ml-side lg:mr-side md:mt-top lg:mt-top sm:mt-listT lg:mb-bottom 
        ml-sideLMb mr-sideLMb md:mb-bottom sm:mb-bottomMobile'>
            <JobPage jobs={getJobsForPage(0)}/>
            <PageBox
                currentPage={currentPage}
                countPerPage={COUNT_PER_PAGE}
                onPageSelect={handlePageSelect}
            />
        </div>
    )
}

export default JobListContainer;
