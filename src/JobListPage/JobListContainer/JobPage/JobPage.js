import React from 'react';
import JobComponent from '../JobComponent/JobComponent';

const JobPage = ({ jobs }) => {

    const getListContent = () => {
        if(!jobs) {
            return;
        }

        return jobs.map((job, index) => {
            return <JobComponent
                title={job.title}
                address={job.address}
                picture={job.pictures[0]}
                key={index}
            />
        })
    }

    return (
        <div>
            {getListContent()}
        </div>
    )
}

export default JobPage;