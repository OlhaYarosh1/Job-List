import React from 'react';
import DetailedJobComponent from '../DetailedJobComponent/DetailedJobComponent';
import jobsJson from '../../../JobListPage/JobListContainer/jobs.json';

const DetailedJobPage = () => {

    const jobs = jobsJson;

    const getListContent = () => {
        if(jobs) {
            return jobs.map((job, index) => {
                return getJobComponent(job, index);
            })
        }
    }

    const getJobComponent = (job, index) => {
        return <DetailedJobComponent
            jobId={job.id}
            picture={job.pictures.map((item) => item + `?random=${Math.floor(Math.random() * 100000)}`)}
            title={job.title}
            key={index}
        />
    }

    return (
        <div>
            {getListContent()}
        </div>
    )
}

export default DetailedJobPage;
