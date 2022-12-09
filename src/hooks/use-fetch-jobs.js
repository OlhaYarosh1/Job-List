import { useEffect } from 'react';

const apiUrl = 'http://localhost:3000/jobs/';

const UseFetchJobs = (result) => {

    useEffect(() => {

        fetch(apiUrl, {
            method: 'GET',
        })
        .then(data => data.json())
        .then((data) => {
            result(data);
            console.log(data)
        });
    }, [result]);
}

export default UseFetchJobs;
