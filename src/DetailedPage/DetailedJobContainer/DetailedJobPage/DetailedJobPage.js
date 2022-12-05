import React from 'react';
import DetailedJobComponent from '../DetailedJobComponent/DetailedJobComponent';
import jobsJson from '../../../JobListPage/JobListContainer/jobs.json';
import { Link, useParams } from 'react-router-dom';


const DetailedJobPage = () => {

    const {id} = useParams();

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
            picture={job.pictures.map((item) => item + `?random=${[0]}`)}
            title={job.title.id}
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
