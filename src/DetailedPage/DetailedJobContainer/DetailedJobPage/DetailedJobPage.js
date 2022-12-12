import React from 'react';
import DetailedJobComponent from '../DetailedJobComponent/DetailedJobComponent';
import jobsJson from '../../../JobListPage/JobListContainer/jobs.json';
import {DateUtils} from '../../../utils/DateUtils';

const DetailedJobPage = ({myId}) => {

    const jobs = jobsJson;

    let job;

    for (let i = 0; i < jobs.length; i++) {
        if (myId === jobs[i].id) {
            job = jobs[i];
        }   
    }

    let str = job.description;
    let description = str.split('\n');

    const getJobComponent = (job) => {
        return <DetailedJobComponent
            jobId={job.id}
            postedAt={DateUtils.calcDaysAgo(job.createdAt)}
            picture={job.pictures.map((item) => item + `?random=${Math.floor(Math.random() * 100000)}`)}
            title={job.title}
            myId={myId}
            description={description[1]}
            responsibilities={description[4]}
            benefits={description[7]}
        />
    }

    return (
        <div>
            {getJobComponent(job)}
        </div>
    )
}

export default DetailedJobPage;
