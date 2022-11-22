import React from 'react';
import JobComponent from '../JobComponent/JobComponent';

const JobPage = ({ jobs }) => {

    const getListContent = () => {
        if(!jobs) {
            return;
        }

        return jobs.map((job, index) => {
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const postedDate = new Date(job.createdAt);
            let today = new Date()
            const diffDays = Math.round(Math.abs((today - postedDate) / oneDay));
            return <JobComponent
                title={job.title}
                address={job.address}
                picture={job.pictures[0]}
                createdAt={job.createdAt}
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