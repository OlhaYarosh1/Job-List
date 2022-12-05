import React from 'react';
import JobComponent from '../JobComponent/JobComponent';
import {DateUtils} from '../../../utils/DateUtils';

const JobPage = ({ jobs }) => {

    const getJobComponent = (job, index) => {
        console.log(index)
        return <JobComponent
            title={job.title}
            address={job.address}
            picture={job.pictures.map((item) => item + `?random=${[0]}`)}
            daysAgo={DateUtils.calcDaysAgo(job.createdAt)}
            index={index}
            key={index}
        />
    }

    const getListContent = () => {
        if(jobs) {
            return jobs.map((job, index) => {
                return getJobComponent(job, index);
            })
        }
    }

    return (
        <div>
            {getListContent()}
        </div>
    )
}

export default JobPage;