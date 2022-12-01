import React from 'react';
import DetailedJobComponent from '../DetailedJobComponent/DetailedJobComponent';
import jobsJson from '../../../JobListPage/JobListContainer/jobs.json';


const DetailedJobPage = () => {

    const jobs = jobsJson;

    const getJobComponent = (job, index) => {
        const p = job.pictures.map((item) => item + `?random=${[0]}`);
        console.log(p)
        return <DetailedJobComponent
            picture={job.pictures.map((item) => item + `?random=${[0]}`)}
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

export default DetailedJobPage;
