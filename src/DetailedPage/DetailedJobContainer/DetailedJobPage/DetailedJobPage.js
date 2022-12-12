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

    console.log(job.benefits[0]);

    const getBenefitsContent = () => {
        return (job.benefits.map(e => (
            <div
              title={e}
              className="flex justify-center items-center mr-[10px] w-[220px] h-[49px] border border-[#FFCF00] bg-[#FFCF00]/[0.15] text-[#988B49] font-bold text-base rounded-lg text-center"
            >
              {e}
            </div>
          )))
    }

    const getJobComponent = (job) => {
        return <DetailedJobComponent
            jobId={job.id}
            postedAt={DateUtils.calcDaysAgo(job.createdAt)}
            picture={job.pictures.map((item) => item + `?random=${Math.floor(Math.random() * 100000)}`)}
            title={job.title}
            myId={myId}
            description={description[1]}
            responsibilities={description[4]}
            benefitsDescription={description[7]}
            benefits={getBenefitsContent()}
        />
    }

    return (
        <div>
            {getJobComponent(job)}
        </div>
    )
}

export default DetailedJobPage;
