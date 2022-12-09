import React from 'react';
import JobComponent from '../JobComponent/JobComponent';
import {DateUtils} from '../../../utils/DateUtils';

const JobPage = ({ jobs, jobId, mySetData }) => {

    const getJobComponent = (job, index) => {
        return <JobComponent
            jobId={job.id}
            name={job.name}
            title={job.title}
            address={job.address}
            picture={job.pictures.map((item) => item + `?random=${Math.floor(Math.random() * 100000)}`)}
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