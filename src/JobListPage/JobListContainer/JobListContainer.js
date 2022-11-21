import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import PaginationBox from '../PageBox/PaginationBox';
import JobPage from './JobPage/JobPage';
import { jobInfoActions } from '../../store/jobState';

const JobListContainer = () => {
    const dispatch = useDispatch();

    const jobs = useSelector(state => state.jobInfo.jobs)

    const COUNT_PER_PAGE = 4;

    const currentPage = useSelector(state => state.jobInfo.pageNumber)

    const getJobsForPage = (pageIndex) => {
        const start = pageIndex * COUNT_PER_PAGE;
        const end = start + COUNT_PER_PAGE;
        if(!jobs) {
            return;
        }
        return jobs.slice(start, end);
    }
    const handlePageSelect = (pageNumber) => {
        dispatch(jobInfoActions.setPageNumber(pageNumber))
    }

    return (
        <div className='relative lg:max-w-component lg:ml-side lg:mr-side md:mt-top lg:mt-top sm:mt-listT lg:mb-bottom 
        ml-sideLMb mr-sideLMb md:mb-bottom sm:mb-bottomMobile'>
            <JobPage jobs={getJobsForPage(currentPage)}/>
            <PaginationBox
                currentPage={currentPage}
                countPerPage={COUNT_PER_PAGE}
                itemsCount={jobs ? jobs.length : 0}
                onPageSelect={handlePageSelect}
            />
        </div>
    )
}

export default JobListContainer;
