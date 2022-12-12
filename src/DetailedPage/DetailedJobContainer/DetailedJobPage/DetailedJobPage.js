import React from 'react';
import DetailedJobComponent from '../DetailedJobComponent/DetailedJobComponent';
import jobsJson from '../../../JobListPage/JobListContainer/jobs.json';

const DetailedJobPage = ({myId}) => {

    console.log(myId);

    const jobs = jobsJson;

    let job;

    for (let i = 0; i < jobs.length; i++) {
        if (myId === jobs[i].id) {
            job = jobs[i];
        }   
    }

    const getJobComponent = (job) => {
        return <DetailedJobComponent
            jobId={job.id}
            picture={job.pictures.map((item) => item + `?random=${Math.floor(Math.random() * 100000)}`)}
            title={job.title}
            myId={myId}
        />
    }

    return (
        <div>
            {getJobComponent(job)}
        </div>
    )
}

export default DetailedJobPage;
