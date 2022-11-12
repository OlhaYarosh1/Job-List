import { useState, useEffect } from 'react';

const accessToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
const apiUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

const UseFetchJobs = () => {

    // const [jobId, setJobId] = useState();
    // const [jobName, setJobName] = useState();
    // const [jobEmail, setJobEmail] = useState();
    // const [jobPhone, setJobPhone] = useState();
    const [jobTitle, setJobTitle] = useState();
    // const [jobSalary, setJobSalary] = useState();
    const [jobAddress, setJobAddress] = useState();
    // const [jobBenefits, setJobBenefits] = useState();
    // const [jobLocation, setJobLocation] = useState();
    // const [jobPictures, setJobPictures] = useState();
    // const [jobDescription, setJobDescription] = useState();
    // const [jobEmployment, setJobEmployment] = useState();
    // const [jobDate, setJobDate] = useState();

    useEffect(() => {

        fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        })
        .then(data => data.json())
        .then((data) => {
            for(let i = 0; i <= 19; i++) {
                // let jobId = data[i]['id'];
                // setJobId(jobId);
                // let jobName = data[i]['name'];
                // setJobName(jobName);
                // let jobEmail = data[i]['email'];
                // setJobEmail(jobEmail);
                // let jobPhone = data[i]['phone'];
                // setJobPhone(jobPhone);
                let jobTitle = data[i]['title'];
                setJobTitle(jobTitle);
                // let jobSalary = data[i]['salary'];
                // setJobSalary(jobSalary);
                let jobAddress = data[i]['address'];
                setJobAddress(jobAddress);
                // for(let j = 0; j <= 1; j++) {
                //     let jobBenefits = data[i]['benefits'][j];
                //     setJobBenefits(jobBenefits);
                // }
                // let jobPictures = data[i]['pictures'];
                // setJobPictures(jobPictures);
                // let jobDescription = data[i]['description'];
                // setJobDescription(jobDescription);
                // for(let j = 0; j <= 1; j++) {
                //     let jobEmployment = data[i]['employment_type'];
                //     setJobEmployment(jobEmployment);
                // }
                // let jobDate = data[i]['updatedAt'];
                // setJobDate(jobDate);
            }
        });
    }, []);

    return [jobTitle, jobAddress];
}

export default UseFetchJobs;