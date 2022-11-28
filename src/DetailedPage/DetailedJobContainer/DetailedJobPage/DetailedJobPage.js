import React from 'react';
import DetailedJobComponent from '../DetailedJobComponent/DetailedJobComponent';
import jobsJson from '../../JobListPage/jobs.json';


const DetailedJobPage = ({jobs}) => {

    const jobs = jobsJson;
    
    const getJobComponent = (job, index) => {
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
