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

    let compensation = description[7];
    let result = compensation.split('.')


    const getBenefitsContent = () => {
        return (job.benefits.map(e => (
            <div
              title={e}
              className="flex justify-center items-center mr-[10px] w-[220px] h-[50px] border border-[#FFCF00] bg-[#FFCF00]/[0.15] text-[#988B49] font-bold text-base rounded-lg text-center"
            >
              {e}
            </div>
          )))
    }

    const getEmploymentTypeContent = () => {
        return (job.employment_type.map(e => (
            <div
              title={e}
              className="flex justify-center items-center mr-[8px] w-[222px] h-[49px] border border-[#55699e]/30 bg-[#a1b1db]/[0.317343] text-[#55699E] font-bold text-base rounded-lg text-center">
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
            benefits={getBenefitsContent()}
            employmentType={getEmploymentTypeContent()}
            compensation1={result[0]}
            compensation2={result[1]}
            compensation3={result[2]}
            salary={job.salary}
        />
    }

    return (
        <div>
            {getJobComponent(job)}
        </div>
    )
}

export default DetailedJobPage;
