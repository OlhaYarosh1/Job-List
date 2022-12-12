import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import PaginationBox from '../PageBox/PaginationBox';
import JobPage from './JobPage/JobPage';
import { jobInfoActions } from '../../store/jobState';
import jobsJson from './jobs.json';
import classes from './JobListContainer.module.css'

const JobListContainer = ({mySetData}) => {
    const dispatch = useDispatch();

    const jobs = jobsJson;

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

    let lastPage = Math.ceil(jobs.length / COUNT_PER_PAGE)
    const handlePageSelect = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber < lastPage) {
            dispatch(jobInfoActions.setPageNumber(pageNumber))
        }
    }

    return (
        <div className={classes.container}>
            <JobPage jobs={getJobsForPage(currentPage)} mySetData={mySetData}/>
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
